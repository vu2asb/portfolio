import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[url("/footer.png")] bg-cover bg-center h-[250px] text-slate-100 grid place-items-center'>
      <div className="text-center">

      &copy; {new Date().getFullYear()} Ashok Singh | Aural Systems. All rights reserved.
      <p>
        For inquiries, please contact us at{" "}
        <a
          href="mailto:ashok90@auralsystems.com"
          className="text-blue-500 hover:underline"
        >
          ashok90@auralsystems.com
        </a>
      </p>

      </div>

    </div>
  )
}

export default Footer
