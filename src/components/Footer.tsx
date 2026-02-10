const Footer = () => {
  return (
    <footer className='border-t border-slate-800 bg-slate-950 py-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-400'>
        <p>© {new Date().getFullYear()} Atul Gulia. All rights reserved.</p>
        <p className='flex gap-4'>
          <a
            href='https://github.com/AtulGulia-1'
            className='hover:text-sky-300 transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com'
            className='hover:text-sky-300 transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
