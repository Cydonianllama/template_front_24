/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout } from '@/layout/index'
import { Separator } from '@/components/ui/separator'

import { CompactTable } from '@table-library/react-table-library/compact';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/chakra-ui';
import { useTheme } from '@table-library/react-table-library/theme';
import { useTree } from "@table-library/react-table-library/tree";

const nodes = [
  {
    id: '0',
    title: 'Shopping List',
    description: 'asdasd',
    creationDate: new Date(2020, 1, 15),
    qtyItems: 3,
    state: 'COMPLETE',
    items: [
      {
        qty: 1,
        unity: 'kg',
        description: 'descripcion product'
      },
      {
        qty: 31,
        unity: 'kg',
        description: 'descripcion product'
      },
      {
        qty: 4,
        unity: 'kg',
        description: 'descripcion product'
      }
    ]
  },
];

const COLUMNS = [
  { label: 'Titulo', renderCell: (item: any) => item.title, tree: true },
  { label: 'Descripion', renderCell: (item: any) => item.description },
  { label: 'Items', renderCell: (item: any) => item.qtyItems },
  { label: 'Estado', renderCell: (item: any) => item.state },
  {
    label: 'Fecha creación',
    renderCell: (item: any) =>
      item.creationDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }),
  },
];


export const HomePage = () => {
  const data = { nodes };

  const chakraTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(chakraTheme);

  const tree = useTree(data, {
    onChange: onTreeChange,
    state: {
      ids: ['2']
    }
  });

  function onTreeChange(action: any, state: any) {
    console.log(action, state);
  }

  return (<>
    <Layout>
      <div className='px-8 h-full'>
        <div className='w-full space-y-6 py-6'>
          <div className='space-y-2'>
            <div>
              <h3 className='font-semibold text-md'>Requerimientos</h3>
              <Separator className='my-4' />
            </div>

            <CompactTable columns={COLUMNS} data={data} theme={theme} tree={tree} />
          </div>
        </div>
      </div>
    </Layout>
  </>)
}