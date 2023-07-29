export function ContentWrapper({ children }: React.PropsWithChildren<unknown>) {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-5xl'>
        {children}
      </div>
    </div>
  )
}
