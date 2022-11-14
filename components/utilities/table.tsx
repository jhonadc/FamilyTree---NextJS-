import type { ReactNode } from "react";

export interface InputProps {
  columns: {
    id: string;
    label: ReactNode;
  }[];
  rows: Record<string, ReactNode>[];
}

export function Table(props: InputProps) {
  const { columns, rows } = props;

  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 px-4 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg shadow ring-1 ring-black ring-opacity-5">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  {columns.map(({ id, label }) => (
                    <th
                      key={id}
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {rows.map((row, idx) => (
                  <tr key={idx}>
                    {columns.map(({ id }) => (
                      <td key={id} scope="col" className="px-3 py-3.5 text-left text-sm text-gray-900">
                        {row[id]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
