
import { ThemeConfig, ThemeType } from './types';

export const themes: Record<ThemeType, ThemeConfig> = {
  basic: {
    id: 'basic',
    name: 'Basic',
    color: 'text-themes-basic',
    fontClass: 'font-sans',
    spacing: 'space-y-4',
    headerStyle: 'text-2xl font-semibold',
    sectionTitleStyle: 'text-lg font-semibold uppercase tracking-wide text-themes-basic border-b border-gray-200 pb-1 mb-3',
    sectionContentStyle: 'mt-2',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOGY4Ii8+PGxpbmUgeDE9IjEwIiB5MT0iMjAiIHgyPSI5MCIgeTI9IjIwIiBzdHJva2U9IiM0QTU1NjgiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIxMCIgeTE9IjQwIiB4Mj0iOTAiIHkyPSI0MCIgc3Ryb2tlPSIjNEE1NTY4IiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMTAiIHkxPSI2MCIgeDI9IjkwIiB5Mj0iNjAiIHN0cm9rZT0iIzRBNTU2OCIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjEwIiB5MT0iODAiIHgyPSI5MCIgeTI9IjgwIiBzdHJva2U9IiM0QTU1NjgiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg=='
  },
  casual: {
    id: 'casual',
    name: 'Casual',
    color: 'text-themes-casual',
    fontClass: 'font-sans',
    spacing: 'space-y-5',
    headerStyle: 'text-3xl font-bold',
    sectionTitleStyle: 'text-xl font-medium text-themes-casual mb-3',
    sectionContentStyle: 'mt-3',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmZmY1Ii8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTAiIGZpbGw9IiM0OEJCNzgiLz48dGV4dCB4PSI0MCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNDhCQjc4Ij5DYXN1YWw8L3RleHQ+PGxpbmUgeDE9IjEwIiB5MT0iNDAiIHgyPSI5MCIgeTI9IjQwIiBzdHJva2U9IiM0OEJCNzgiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNSwyIi8+PC9zdmc+'
  },
  
  // Redesigned professional theme
  professional: {
    id: 'professional',
    name: 'Professional',
    color: 'text-themes-professional',
    fontClass: 'font-serif',
    spacing: 'space-y-6',
    headerStyle: 'text-2xl font-bold tracking-tight text-themes-professional border-b-2 border-themes-professional pb-2',
    sectionTitleStyle: 'text-base uppercase font-bold tracking-widest bg-themes-professional text-white py-1 px-3 inline-block mb-3',
    sectionContentStyle: 'mt-3 pl-3 border-l-2 border-themes-professional/30',
    backgroundClass: 'bg-white',
    cardStyle: 'p-6 rounded-none shadow-md',
    borderStyle: 'border-t-8 border-themes-professional',
    imagePlacement: 'right',
    imageStyle: 'w-28 h-28 rounded-none shadow-md border-4 border-white',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmZmZmIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSI4IiBmaWxsPSIjMzE4MkNFIi8+PHJlY3QgeD0iNzAiIHk9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmMGYwZjAiIHN0cm9rZT0iI2QxZDVkYiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMTUiIHk9IjI1IiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzE4MkNFIj5OYW1lPC90ZXh0PjxsaW5lIHgxPSIxNSIgeTE9IjMwIiB4Mj0iNjAiIHkyPSIzMCIgc3Ryb2tlPSIjMzE4MkNFIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSIxNSIgeT0iNDUiIHdpZHRoPSIyNSIgaGVpZ2h0PSI3IiBmaWxsPSIjMzE4MkNFIiByeD0iMCIgcnk9IjAiLz48dGV4dCB4PSIxOCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjQiIGZpbGw9IiNmZmYiPlNFQ1RJT048L3RleHQ+PHJlY3QgeD0iMTUiIHk9IjU1IiB3aWR0aD0iNzAiIGhlaWdodD0iNDAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2VjZjBmNSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSIxLDEiLz48bGluZSB4MT0iMjAiIHkxPSI1NSIgeDI9IjIwIiB5Mj0iOTUiIHN0cm9rZT0iI2UxZWRmYiIgc3Ryb2tlLXdpZHRoPSIzIi8+PC9zdmc+'
  },
  
  // Redesigned creative theme
  creative: {
    id: 'creative',
    name: 'Creative',
    color: 'text-themes-creative',
    fontClass: 'font-sans',
    spacing: 'space-y-8',
    headerStyle: 'text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-themes-creative to-pink-500',
    sectionTitleStyle: 'text-lg font-bold text-themes-creative relative pl-10 mb-4 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[3px] before:bg-themes-creative',
    sectionContentStyle: 'mt-4 p-4 rounded-lg bg-pink-50/50',
    backgroundClass: 'bg-gradient-to-br from-white to-pink-50',
    cardStyle: 'p-8 rounded-3xl shadow-xl',
    borderStyle: '',
    imagePlacement: 'top',
    imageStyle: 'w-40 h-40 mx-auto rounded-full border-8 border-white shadow-lg transform -rotate-6',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmUyZjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0idGV4dEdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjRUQ2NEE2Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZjQ3MmI2Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMjUiIHI9IjE1IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZGUyZjkiIHN0cm9rZS13aWR0aD0iNCIgdHJhbnNmb3JtPSJyb3RhdGUoLTYgNTAgMjUpIi8+PHRleHQgeD0iNTAiIHk9IjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc3R5bGU9Iml0YWxpYyIgZmlsbD0idXJsKCN0ZXh0R3JhZCkiPkNyZWF0aXZlPC90ZXh0PjxsaW5lIHgxPSIyMCIgeTE9IjY1IiB4Mj0iMzAiIHkyPSI2NSIgc3Ryb2tlPSIjRUQ2NEE2IiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSIzNSIgeT0iNjAiIHdpZHRoPSI0NSIgaGVpZ2h0PSIxNSIgZmlsbD0iI2ZmZWNmYyIgcng9IjQiIHJ5PSI0Ii8+PC9zdmc+'
  },
  
  // Redesigned modern theme
  modern: {
    id: 'modern',
    name: 'Modern',
    color: 'text-themes-modern',
    fontClass: 'font-sans',
    spacing: 'space-y-7',
    headerStyle: 'text-3xl font-extrabold tracking-tight text-themes-modern flex flex-col items-center',
    sectionTitleStyle: 'text-sm font-semibold uppercase tracking-widest text-themes-modern/80 flex items-center after:content-[""] after:ml-2 after:flex-1 after:h-px after:bg-themes-modern/30',
    sectionContentStyle: 'mt-4 grid grid-cols-1 gap-4',
    backgroundClass: 'bg-white',
    cardStyle: 'p-7 shadow-lg rounded-xl',
    borderStyle: '',
    imagePlacement: 'center',
    imageStyle: 'w-32 h-32 mx-auto rounded-full mb-4 ring-4 ring-themes-modern/20 ring-offset-4',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmZmZmIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNSIgcj0iMTUiIGZpbGw9IiNmYWY1ZmYiIHN0cm9rZT0iI2UyZDFmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iNTAiIHk9IjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiM4MDVBRDUiPk1vZGVybjwvdGV4dD48bGluZSB4MT0iMTAiIHkxPSI2MCIgeDI9IjMwIiB5Mj0iNjAiIHN0cm9rZT0iIzgwNUFENSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjMzIiB5MT0iNjAiIHgyPSI5MCIgeTI9IjYwIiBzdHJva2U9IiNlNWUwZjkiIHN0cm9rZS13aWR0aD0iMSIvPjxyZWN0IHg9IjEwIiB5PSI2NSIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNlZWU2ZmYiIHN0cm9rZS13aWR0aD0iMSIgcng9IjQiIHJ5PSI0Ii8+PC9zdmc+'
  },
  
  // Redesigned business theme
  business: {
    id: 'business',
    name: 'Business',
    color: 'text-themes-business',
    fontClass: 'font-serif',
    spacing: 'space-y-5',
    headerStyle: 'text-3xl font-semibold text-themes-business flex items-end gap-4 border-b-2 border-themes-business pb-2',
    sectionTitleStyle: 'text-lg font-semibold text-white bg-themes-business py-1 px-3 rounded-sm inline-block mb-3 shadow-sm',
    sectionContentStyle: 'mt-4 px-3',
    backgroundClass: 'bg-amber-50/50',
    cardStyle: 'p-6 rounded-md border border-amber-100 shadow-md',
    borderStyle: '',
    imagePlacement: 'left',
    imageStyle: 'w-28 h-28 rounded-md border-2 border-amber-200 shadow-md mr-4',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmYmYxIi8+PHJlY3QgeD0iMTAiIHk9IjIwIiB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIGZpbGw9IiNmY2Y3ZWQiIHN0cm9rZT0iI2ZiZDM4ZCIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iNDUiIHk9IjMwIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjREQ2QjIwIj5OYW1lPC90ZXh0PjxsaW5lIHgxPSI0NSIgeTE9IjM1IiB4Mj0iOTAiIHkyPSIzNSIgc3Ryb2tlPSIjREQ2QjIwIiBzdHJva2Utd2lkdGg9IjIiLz48cmVjdCB4PSIxMCIgeT0iNTUiIHdpZHRoPSIyNSIgaGVpZ2h0PSI3IiBmaWxsPSIjREQ2QjIwIiByeD0iMCIgcnk9IjAiLz48dGV4dCB4PSIxMiIgeT0iNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjQiIGZpbGw9IiNmZmYiPlNFQ1RJT048L3RleHQ+PHJlY3QgeD0iMTAiIHk9IjY1IiB3aWR0aD0iODAiIGhlaWdodD0iMjUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZiZGM5ZCIgc3Ryb2tlLXdpZHRoPSIxIiByeD0iMiIgcnk9IjIiLz48L3N2Zz4='
  },
  
  minimal: {
    id: 'minimal',
    name: 'Minimal',
    color: 'text-slate-800',
    fontClass: 'font-sans',
    spacing: 'space-y-5',
    headerStyle: 'text-3xl font-light tracking-tight',
    sectionTitleStyle: 'text-sm font-medium uppercase tracking-widest text-slate-500 mb-3',
    sectionContentStyle: 'mt-2',
    backgroundClass: 'bg-white',
    cardStyle: 'p-5',
    imagePlacement: 'top',
    imageStyle: 'w-24 h-24 mx-auto rounded-full mb-4 border border-slate-200 shadow-sm',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmZmZmIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSIyNSIgcj0iMTAiIGZpbGw9IiNmYWZhZmEiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iNTAiIHk9IjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSI4IiBmaWxsPSIjMjVmMDdYNSI+TUlOSU1BTDwvdGV4dD48bGluZSB4MT0iMzAiIHkxPSI2MCIgeDI9IjcwIiB5Mj0iNjAiIHN0cm9rZT0iI2YxZjVmOSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjMwIiB5MT0iNzAiIHgyPSI3MCIgeTI9IjcwIiBzdHJva2U9IiNmMWY1ZjkiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIzMCIgeTE9IjgwIiB4Mj0iNzAiIHkyPSI4MCIgc3Ryb2tlPSIjZjFmNWY5IiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4='
  },
  elegant: {
    id: 'elegant',
    name: 'Elegant',
    color: 'text-emerald-700',
    fontClass: 'font-serif',
    spacing: 'space-y-6',
    headerStyle: 'text-4xl font-light tracking-wide text-emerald-800',
    sectionTitleStyle: 'text-lg italic font-normal text-emerald-700 border-b border-emerald-200 pb-1 mb-3',
    sectionContentStyle: 'mt-4 text-gray-700',
    backgroundClass: 'bg-emerald-50',
    cardStyle: 'p-6 border-l-4 border-emerald-700',
    borderStyle: '',
    imagePlacement: 'left',
    imageStyle: 'w-32 h-32 rounded-md mr-6 float-left shadow-md',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWNmZGYzIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTUiIGhlaWdodD0iODAiIGZpbGw9IiMxMzVlNDgiLz48dGV4dCB4PSI0MCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzEzNWU0OCI+RWxlZ2FudDwvdGV4dD48bGluZSB4MT0iMzAiIHkxPSI0MCIgeDI9IjkwIiB5Mj0iNDAiIHN0cm9rZT0iI2JiZWZkNCIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjMwIiB5MT0iNTAiIHgyPSI5MCIgeTI9IjUwIiBzdHJva2U9IiNlY2ZkZjMiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIzMCIgeTE9IjYwIiB4Mj0iOTAiIHkyPSI2MCIgc3Ryb2tlPSIjZWNmZGYzIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMzAiIHkxPSI3MCIgeDI9IjkwIiB5Mj0iNzAiIHN0cm9rZT0iI2VjZmRmMyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+'
  },
  technical: {
    id: 'technical',
    name: 'Technical',
    color: 'text-sky-700',
    fontClass: 'font-mono',
    spacing: 'space-y-5',
    headerStyle: 'text-2xl font-bold tracking-tight text-sky-700',
    sectionTitleStyle: 'text-base font-bold bg-sky-100 text-sky-700 px-2 py-1 rounded mb-3 inline-block',
    sectionContentStyle: 'mt-3 text-gray-800 space-y-2',
    backgroundClass: 'bg-gray-50',
    cardStyle: 'p-4 border border-sky-200 rounded-md',
    imagePlacement: 'right',
    imageStyle: 'w-24 h-24 rounded float-right ml-4 border border-sky-200 p-1',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PHJlY3QgeD0iNjAiIHk9IjEwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9IiNlMGY1ZmYiIHN0cm9rZT0iI2JhZTZmZCIgc3Ryb2tlLXdpZHRoPSIxIi8+PHJlY3QgeD0iMTAiIHk9IjI1IiB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIGZpbGw9IiNlMGY1ZmYiIHJ4PSIzIiByeT0iMyIvPjx0ZXh0IHg9IjE1IiB5PSIzMyIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSI2IiBmaWxsPSIjMDM2OWExIj5URUNITklDQUw8L3RleHQ+PGxpbmUgeDE9IjEwIiB5MT0iNTAiIHgyPSI5MCIgeTI9IjUwIiBzdHJva2U9IiNiYWU2ZmQiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iMywxIi8+PHJlY3QgeD0iMTAiIHk9IjYwIiB3aWR0aD0iODAiIGhlaWdodD0iMTAiIGZpbGw9IiNmMWY1ZjkiIHN0cm9rZT0iI2JhZTZmZCIgc3Ryb2tlLXdpZHRoPSIxIiByeD0iMiIgcnk9IjIiLz48cmVjdCB4PSIxMCIgeT0iODAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2YxZjVmOSIgc3Ryb2tlPSIjYmFlNmZkIiBzdHJva2Utd2lkdGg9IjEiIHJ4PSIyIiByeT0iMiIvPjwvc3ZnPg=='
  },
  vibrant: {
    id: 'vibrant',
    name: 'Vibrant',
    color: 'text-fuchsia-600',
    fontClass: 'font-sans',
    spacing: 'space-y-6',
    headerStyle: 'text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600',
    sectionTitleStyle: 'text-lg font-bold text-fuchsia-600 mb-2',
    sectionContentStyle: 'mt-3 text-gray-700 border-l-4 border-pink-300 pl-4',
    backgroundClass: 'bg-gradient-to-br from-white to-fuchsia-50',
    cardStyle: 'p-5 rounded-lg shadow-md',
    imagePlacement: 'top',
    imageStyle: 'w-32 h-32 mx-auto rounded-full mb-4 border-4 border-white shadow-md',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZGU2ZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0idGV4dEdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZGIyNzc3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZTk0YTgzIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMjUiIHI9IjE1IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSIjZmNlN2Y0IiBzdHJva2Utd2lkdGg9IjQiLz48cmVjdCB4PSIyMCIgeT0iNTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI1IiBmaWxsPSIjZGIyNzc3Ii8+PHJlY3QgeD0iMjAiIHk9IjYwIiB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmZmZmYiIHJ4PSIyIiByeT0iMiIgc3Ryb2tlPSIjZmNlN2Y0IiBzdHJva2Utd2lkdGg9IjEiLz48cmVjdCB4PSIyMCIgeT0iODAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2ZmZmZmZiIgcng9IjIiIHJ5PSIyIiBzdHJva2U9IiNmY2U3ZjQiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg=='
  },
  
  // Four new themes below
  
  // New Nordic theme
  nordic: {
    id: 'nordic',
    name: 'Nordic',
    color: 'text-slate-700',
    fontClass: 'font-sans',
    spacing: 'space-y-6',
    headerStyle: 'text-2xl font-normal tracking-wide text-slate-800',
    sectionTitleStyle: 'text-sm font-medium uppercase tracking-widest text-slate-600 pb-1 mb-4 border-b border-slate-200',
    sectionContentStyle: 'mt-3 text-slate-700',
    backgroundClass: 'bg-slate-50',
    cardStyle: 'p-6 border border-slate-100 rounded-none',
    borderStyle: '',
    imagePlacement: 'left',
    imageStyle: 'w-28 h-28 rounded-none grayscale mr-5',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmYWZjIi8+PHJlY3QgeD0iMTAiIHk9IjIwIiB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIGZpbGw9IiNlMmU4ZjAiLz48dGV4dCB4PSI0NSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMzM0MTU1Ij5Ob3JkaWM8L3RleHQ+PGxpbmUgeDE9IjEwIiB5MT0iNTUiIHgyPSI5MCIgeTI9IjU1IiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMSIvPjx0ZXh0IHg9IjEwIiB5PSI2NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNSIgZmlsbD0iIzY0NzQ4YiI+U0VDVElPTiBUSVRMRTwvdGV4dD48cmVjdCB4PSIxMCIgeT0iNzAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZhZmFmYiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4='
  },
  
  // New Blueprint theme
  blueprint: {
    id: 'blueprint',
    name: 'Blueprint',
    color: 'text-blue-900',
    fontClass: 'font-mono',
    spacing: 'space-y-6',
    headerStyle: 'text-2xl font-bold text-blue-900 mb-2',
    sectionTitleStyle: 'text-sm font-bold uppercase tracking-widest text-blue-800 bg-blue-100 py-1 px-2 mb-3 inline-block',
    sectionContentStyle: 'mt-3 ml-2 border-l-2 border-blue-200 pl-4',
    backgroundClass: 'bg-blue-50',
    cardStyle: 'p-6 border border-blue-200 rounded-md',
    borderStyle: '',
    imagePlacement: 'right',
    imageStyle: 'w-28 h-28 rounded border-2 border-blue-300 p-1 float-right ml-4',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWZmNmZmIi8+PHJlY3QgeD0iNjAiIHk9IjIwIiB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIGZpbGw9IiNkYmVhZmUiIHN0cm9rZT0iI2JmZGJmZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iMjAiIHk9IjI1IiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMWUzYThhIj5CbHVlcHJpbnQ8L3RleHQ+PHJlY3QgeD0iMTAiIHk9IjQwIiB3aWR0aD0iMzAiIGhlaWdodD0iOCIgZmlsbD0iI2RiZWFmZSIgcng9IjAiIHJ5PSIwIi8+PHRleHQgeD0iMTIiIHk9IjQ2IiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjQiIGZpbGw9IiMxZTNhOGEiPlNFQ1RJT048L3RleHQ+PGxpbmUgeDE9IjEyIiB5MT0iNjAiIHgyPSIxMiIgeTI9IjkwIiBzdHJva2U9IiNiZmRiZmUiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjE1IiB5PSI1MCIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjQwIiBmaWxsPSIjZWZmNmZmIiBzdHJva2U9IiNkYmVhZmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWRhc2hhcnJheT0iNCwyIi8+PC9zdmc+'
  },
  
  // New Gradient theme
  gradient: {
    id: 'gradient',
    name: 'Gradient',
    color: 'text-indigo-600',
    fontClass: 'font-sans',
    spacing: 'space-y-7',
    headerStyle: 'text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-2',
    sectionTitleStyle: 'text-base font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full mb-3 inline-block shadow-sm',
    sectionContentStyle: 'mt-3 bg-white/90 rounded-lg p-4 shadow-sm',
    backgroundClass: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
    cardStyle: 'p-6 rounded-xl backdrop-blur-sm border border-white',
    borderStyle: '',
    imagePlacement: 'center',
    imageStyle: 'w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg mb-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZWVlMWZmIi8+PHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNmNWU3ZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZWU1ZjgiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0idGV4dEdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNjM2NmYxIi8+PHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNhODU1ZjciLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlYzRiYTkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYnRuR3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MzY2ZjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNhODU1ZjciLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2JnKSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMjUiIHI9IjE1IiBmaWxsPSJ3aGl0ZSIgc3Ryb2tlPSJ1cmwoI2J0bkdyYWQpIiBzdHJva2Utd2lkdGg9IjMiLz48dGV4dCB4PSI1MCIgeT0iNDUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0idXJsKCN0ZXh0R3JhZCkiPkdyYWRpZW50PC90ZXh0PjxyZWN0IHg9IjIwIiB5PSI1NSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjEwIiByeD0iNSIgcnk9IjUiIGZpbGw9InVybCgjYnRuR3JhZCkiLz48cmVjdCB4PSIyMCIgeT0iNzAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4='
  },
  
  // New Retro theme
  retro: {
    id: 'retro',
    name: 'Retro',
    color: 'text-amber-700',
    fontClass: 'font-mono',
    spacing: 'space-y-6',
    headerStyle: 'text-3xl font-black uppercase text-amber-800 border-b-4 border-amber-500 pb-2',
    sectionTitleStyle: 'text-lg font-bold uppercase bg-amber-200 text-amber-800 px-2 py-1 inline-block mb-3 border-2 border-amber-800',
    sectionContentStyle: 'mt-3 border-2 border-amber-200 p-3',
    backgroundClass: 'bg-amber-50',
    cardStyle: 'p-6 border-4 border-double border-amber-300',
    borderStyle: '',
    imagePlacement: 'left',
    imageStyle: 'w-28 h-28 p-1 border-2 border-amber-700 mr-4 grayscale sepia',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmYmViIi8+PHJlY3QgeD0iMTAiIHk9IjIwIiB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2I0NWMwOSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iNDUiIHk9IjMwIiBmb250LWZhbWlseT0ibW9ub3NwYWNlIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2I0NWMwOSI+UkVUUk88L3RleHQ+PGxpbmUgeDE9IjEwIiB5MT0iMzUiIHgyPSI5MCIgeTI9IjM1IiBzdHJva2U9IiNiNDVjMDkiIHN0cm9rZS13aWR0aD0iMyIvPjxyZWN0IHg9IjEwIiB5PSI0NSIgd2lkdGg9IjMwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmRlNjhhIiBzdHJva2U9IiNiNDVjMDkiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHg9IjE1IiB5PSI1MiIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSI2IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2I0NWMwOSI+U0VDVElPTjwvdGV4dD48cmVjdCB4PSIxMCIgeT0iNjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIzMCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZmRlNjhhIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4='
  },
  
  academic: {
    id: 'academic',
    name: 'Academic',
    color: 'text-indigo-800',
    fontClass: 'font-serif',
    spacing: 'space-y-7',
    headerStyle: 'text-2xl font-bold text-center text-indigo-900',
    sectionTitleStyle: 'text-lg font-semibold text-indigo-800 border-b-2 border-indigo-200 pb-1 mb-3',
    sectionContentStyle: 'mt-4 text-gray-800',
    backgroundClass: 'bg-indigo-50',
    cardStyle: 'p-6 border border-indigo-100',
    imagePlacement: 'center',
    imageStyle: 'w-40 h-40 mx-auto rounded-md mb-4 border border-indigo-200 p-1',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVmMmZmIi8+PHJlY3QgeD0iMzAiIHk9IjEwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9IiNlZWYyZmYiIHN0cm9rZT0iI2M3ZDJmZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iNTAiIHk9IjI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iIzMxMmU4MCI+QUNBREVNSUM8L3RleHQ+PGxpbmUgeDE9IjIwIiB5MT0iNDAiIHgyPSI4MCIgeTI9IjQwIiBzdHJva2U9IiNjN2QyZmUiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIyMCIgeTE9IjUwIiB4Mj0iODAiIHkyPSI1MCIgc3Ryb2tlPSIjZWVmMmZmIiBzdHJva2Utd2lkdGg9IjIiLz48bGluZSB4MT0iMjAiIHkxPSI2MCIgeDI9IjgwIiB5Mj0iNjAiIHN0cm9rZT0iI2VlZjJmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PGxpbmUgeDE9IjIwIiB5MT0iNzAiIHgyPSI4MCIgeTI9IjcwIiBzdHJva2U9IiNlZWYyZmYiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIyMCIgeTE9IjgwIiB4Mj0iODAiIHkyPSI4MCIgc3Ryb2tlPSIjZWVmMmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4='
  },
  corporate: {
    id: 'corporate',
    name: 'Corporate',
    color: 'text-gray-700',
    fontClass: 'font-sans',
    spacing: 'space-y-5',
    headerStyle: 'text-2xl font-bold text-gray-800',
    sectionTitleStyle: 'text-md font-bold text-gray-700 bg-gray-100 px-3 py-2 rounded mb-3 flex items-center',
    sectionContentStyle: 'mt-4 text-gray-700 pl-3',
    backgroundClass: 'bg-white',
    cardStyle: 'p-6 border-b border-gray-200 shadow-sm',
    borderStyle: 'border-l-4 border-gray-500',
    imagePlacement: 'left',
    imageStyle: 'w-28 h-28 rounded-md mr-5 float-left',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmZmZmIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMjAiIGhlaWdodD0iODAiIGZpbGw9IiNmM2Y0ZjYiIHN0cm9rZT0iI2U1ZTdlYiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iNCIgaGVpZ2h0PSI4MCIgZmlsbD0iIzZiNzI4MCIvPjxyZWN0IHg9IjQwIiB5PSIyMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjNmNGY2IiByeD0iMiIgcnk9IjIiLz48dGV4dCB4PSI0NSIgeT0iMjgiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjYiIGZpbGw9IiM0YjU1NjMiPkNPUlBPUkFURTwvdGV4dD48cmVjdCB4PSI0MCIgeT0iNDAiIHdpZHRoPSI1MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZTVlN2ViIiBzdHJva2Utd2lkdGg9IjEiIHJ4PSIxIiByeT0iMSIvPjxyZWN0IHg9IjQwIiB5PSI2MCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNlNWU3ZWIiIHN0cm9rZS13aWR0aD0iMSIgcng9IjEiIHJ5PSIxIi8+PHJlY3QgeD0iNDAiIHk9IjgwIiB3aWR0aD0iNTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2U1ZTdlYiIgc3Ryb2tlLXdpZHRoPSIxIiByeD0iMSIgcnk9IjEiLz48L3N2Zz4='
  },
  artistic: {
    id: 'artistic',
    name: 'Artistic',
    color: 'text-rose-600',
    fontClass: 'font-sans',
    spacing: 'space-y-6',
    headerStyle: 'text-4xl font-black italic text-rose-600',
    sectionTitleStyle: 'text-lg font-bold text-rose-500 inline-block relative after:content-[""] after:absolute after:w-full after:h-1 after:bg-rose-200 after:left-0 after:-bottom-1 mb-4',
    sectionContentStyle: 'mt-4 text-gray-700',
    backgroundClass: 'bg-rose-50',
    cardStyle: 'p-8 rounded-lg',
    borderStyle: '',
    imagePlacement: 'right',
    imageStyle: 'w-40 h-40 rounded-full float-right ml-5 border-4 border-white shadow-lg transform -rotate-3',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmMWYyIi8+PGNpcmNsZSBjeD0iNzAiIGN5PSIzMCIgcj0iMTUiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZlY2RkMyIgc3Ryb2tlLXdpZHRoPSI0IiB0cmFuc2Zvcm09InJvdGF0ZSgtMyA3MCAzMCkiLz48dGV4dCB4PSIyMCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmb250LXN0eWxlPSJpdGFsaWMiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZTExZDQ4Ij5BcnQ8L3RleHQ+PGxpbmUgeDE9IjIwIiB5MT0iMzUiIHgyPSI0MCIgeTI9IjM1IiBzdHJva2U9IiNlMTFkNDgiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIyMCIgeTE9IjM2IiB4Mj0iNDAiIHkyPSIzNiIgc3Ryb2tlPSIjZmVjZGQzIiBzdHJva2Utd2lkdGg9IjEiLz48cmVjdCB4PSIyMCIgeT0iNTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2ZmZjFmMiIgcng9IjIiIHJ5PSIyIi8+PHJlY3QgeD0iMjAiIHk9IjcwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIGZpbGw9IiNmZmYxZjIiIHJ4PSIyIiByeT0iMiIvPjwvc3ZnPg=='
  },
  classic: {
    id: 'classic',
    name: 'Classic',
    color: 'text-stone-700',
    fontClass: 'font-serif',
    spacing: 'space-y-5',
    headerStyle: 'text-3xl font-bold text-stone-800 text-center mb-2',
    sectionTitleStyle: 'text-lg font-semibold text-stone-700 pb-1 mb-3 border-b border-stone-300',
    sectionContentStyle: 'mt-3 text-stone-600',
    backgroundClass: 'bg-stone-50',
    cardStyle: 'p-6',
    borderStyle: 'border-t-8 border-stone-300',
    imagePlacement: 'center',
    imageStyle: 'w-32 h-32 mx-auto rounded-full mb-3 grayscale',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmFmOGY1Ii8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iODAiIGhlaWdodD0iOCIgZmlsbD0iI2Q2ZDNkMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMzAiIHI9IjEwIiBmaWxsPSIjZTdlNWUxIi8+PHRleHQgeD0iNTAiIHk9IjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iOCIgZmlsbD0iIzQ0NDAzYyI+Q0xBU1NJQzwvdGV4dD48bGluZSB4MT0iMzAiIHkxPSI2MCIgeDI9IjcwIiB5Mj0iNjAiIHN0cm9rZT0iI2Q2ZDNkMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PGxpbmUgeDE9IjMwIiB5MT0iNzAiIHgyPSI3MCIgeTI9IjcwIiBzdHJva2U9IiNmYWY4ZjUiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIHgxPSIzMCIgeTE9IjgwIiB4Mj0iNzAiIHkyPSI4MCIgc3Ryb2tlPSIjZmFmOGY1IiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4='
  },
  digital: {
    id: 'digital',
    name: 'Digital',
    color: 'text-cyan-600',
    fontClass: 'font-sans',
    spacing: 'space-y-6',
    headerStyle: 'text-3xl font-bold text-cyan-700',
    sectionTitleStyle: 'text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1.5 rounded-md shadow-sm mb-3',
    sectionContentStyle: 'mt-3 text-gray-700',
    backgroundClass: 'bg-gradient-to-br from-white to-cyan-50',
    cardStyle: 'p-5 rounded-xl shadow-sm border border-cyan-100',
    borderStyle: '',
    imagePlacement: 'right',
    imageStyle: 'w-28 h-28 float-right ml-4 rounded-lg ring-2 ring-cyan-200 shadow-sm p-1',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMGY3ZmYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYnV0dG9uR3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMwNmI2ZDQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyNTYzZWIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PHJlY3QgeD0iNjAiIHk9IjIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2JhZTZmZCIgc3Ryb2tlLXdpZHRoPSIyIiByeD0iNCIgcnk9IjQiLz48dGV4dCB4PSIyMCIgeT0iMzAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzBjNGE2ZSI+RGlnaXRhbDwvdGV4dD48cmVjdCB4PSIyMCIgeT0iNDAiIHdpZHRoPSIzMCIgaGVpZ2h0PSI4IiBmaWxsPSJ1cmwoI2J1dHRvbkdyYWQpIiByeD0iMiIgcnk9IjIiLz48dGV4dCB4PSIyMiIgeT0iNDYiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjUiIGZpbGw9IndoaXRlIj5TRUNUSU9OPC90ZXh0PjxyZWN0IHg9IjIwIiB5PSI2MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2JhZTZmZCIgc3Ryb2tlLXdpZHRoPSIxIiByeD0iMiIgcnk9IjIiLz48cmVjdCB4PSIyMCIgeT0iODAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNiYWU2ZmQiIHN0cm9rZS13aWR0aD0iMSIgcng9IjIiIHJ5PSIyIi8+PC9zdmc+'
  },
  futuristic: {
    id: 'futuristic',
    name: 'Futuristic',
    color: 'text-violet-600',
    fontClass: 'font-sans',
    spacing: 'space-y-7',
    headerStyle: 'text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600',
    sectionTitleStyle: 'text-sm font-bold uppercase tracking-widest text-violet-600 mb-2 flex items-center before:content-[""] before:block before:h-px before:w-5 before:mr-2 before:bg-gradient-to-r before:from-violet-400 before:to-indigo-400',
    sectionContentStyle: 'mt-3 text-gray-700 bg-white/80 backdrop-blur-sm p-3 rounded-md',
    backgroundClass: 'bg-gradient-to-br from-gray-100 via-white to-violet-50',
    cardStyle: 'p-6 rounded-xl backdrop-blur-sm bg-white/20 border border-white/40 shadow-lg',
    borderStyle: '',
    imagePlacement: 'center',
    imageStyle: 'w-32 h-32 mx-auto rounded-xl mb-4 ring-2 ring-violet-200 shadow-lg p-1 backdrop-blur-sm bg-white/50',
    preview: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiLz48c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2YzZThmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJ0ZXh0R3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM3YzNhZWQiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0ZjQ2ZTUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PHJlY3QgeD0iMjAiIHk9IjEwIiB3aWR0aD0iNjAiIGhlaWdodD0iODAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgcng9IjEwIiByeT0iMTAiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjMwIiByPSIxMCIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjUiIHN0cm9rZT0iI2VkZTlmZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iNTAiIHk9IjU1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSI4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0idXJsKCN0ZXh0R3JhZCkiPkZVVFVSSVNUSUM8L3RleHQ+PGxpbmUgeDE9IjMwIiB5MT0iNjUiIHgyPSI0MCIgeTI9IjY1IiBzdHJva2U9IiM3YzNhZWQiIHN0cm9rZS13aWR0aD0iMSIvPjxyZWN0IHg9IjMwIiB5PSI3MCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuOCIgcng9IjIiIHJ5PSIyIi8+PC9zdmc+'
  }
};
