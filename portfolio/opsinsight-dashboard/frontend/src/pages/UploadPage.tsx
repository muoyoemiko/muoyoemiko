import { useRef, useState } from 'react'
import { CheckCircle, FileText, Upload, X } from 'lucide-react'

const expectedFormats = [
  'Users CSV: Name, Email, Department, LastLogin, Status',
  'Devices CSV: DeviceName, AssignedUser, ComplianceStatus, LastCheckin',
  'Tickets CSV: TicketID, Title, AssignedUser, Priority, Status, LastUpdated',
]

function getFileNames(files: FileList) {
  return Array.from(files).map((file) => file.name)
}

export function UploadPage() {
  const [dragging, setDragging] = useState(false)
  const [uploaded, setUploaded] = useState<string[]>([])
  const [success, setSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const appendFiles = (files: FileList) => {
    const fileNames = getFileNames(files)

    if (fileNames.length > 0) {
      setUploaded((currentFiles) => [...currentFiles, ...fileNames])
    }
  }

  const handleProcessFiles = () => {
    if (uploaded.length > 0) {
      setSuccess(true)
    }
  }

  const handleUploadMore = () => {
    setSuccess(false)
    setUploaded([])

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleRemoveFile = (indexToRemove: number) => {
    setUploaded((currentFiles) =>
      currentFiles.filter((_, index) => index !== indexToRemove),
    )
  }

  const handleClearAll = () => {
    setUploaded([])

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
          Upload Data
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Upload CSV files containing user, device, or ticket data for analysis.
        </p>
      </div>

      {success ? (
        <section className="flex flex-col items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-6 text-center">
          <CheckCircle className="h-9 w-9 text-green-500" aria-hidden="true" />
          <h3 className="font-semibold text-green-800">
            Data processed successfully
          </h3>
          <p className="text-sm text-green-600">
            {uploaded.length} file(s) analyzed. Dashboard data has been
            updated.
          </p>
          <button
            type="button"
            onClick={handleUploadMore}
            className="text-sm text-green-700 underline"
          >
            Upload more files
          </button>
        </section>
      ) : (
        <>
          <label
            htmlFor="file-input"
            onDragOver={(event) => {
              event.preventDefault()
              setDragging(true)
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
              event.preventDefault()
              setDragging(false)
              appendFiles(event.dataTransfer.files)
            }}
            className={`flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-dashed p-10 text-center transition-colors ${
              dragging
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50/30'
            }`}
          >
            <Upload className="h-8 w-8 text-gray-400" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-gray-700">
                Drag &amp; drop CSV files here
              </p>
              <p className="mt-1 text-xs text-gray-400">
                or click to browse files
              </p>
            </div>
            <p className="text-xs text-gray-400">Supported: .csv, .xlsx</p>
            <input
              ref={fileInputRef}
              id="file-input"
              type="file"
              multiple
              accept=".csv,.xlsx"
              className="hidden"
              onChange={(event) => {
                if (event.target.files) {
                  appendFiles(event.target.files)
                }
              }}
            />
          </label>

          {uploaded.length > 0 ? (
            <section className="flex flex-col gap-2 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <h3 className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Queued Files
              </h3>
              <div className="flex flex-col gap-2">
                {uploaded.map((fileName, index) => (
                  <div
                    key={`${fileName}-${index}`}
                    className="flex items-center justify-between gap-3 rounded-lg bg-gray-50 px-3 py-2"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <FileText
                        className="h-3.5 w-3.5 shrink-0 text-blue-500"
                        aria-hidden="true"
                      />
                      <span className="truncate text-sm text-gray-700">
                        {fileName}
                      </span>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${fileName}`}
                      onClick={() => handleRemoveFile(index)}
                      className="shrink-0 text-gray-400 transition-colors hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    >
                      <X className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={uploaded.length === 0}
              onClick={handleProcessFiles}
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Process Files
            </button>

            {uploaded.length > 0 ? (
              <button
                type="button"
                onClick={handleClearAll}
                className="rounded-lg border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
              >
                Clear All
              </button>
            ) : null}
          </div>

          <section className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700">
            <h3 className="mb-1 font-medium">Expected file format</h3>
            <ul className="list-inside list-disc space-y-0.5 text-xs text-blue-600">
              {expectedFormats.map((format) => (
                <li key={format}>{format}</li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  )
}
