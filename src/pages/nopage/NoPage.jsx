import React, { useEffect } from 'react'

function NoPage() {

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({top: 0, left: 0});
  }, []);

  return (
    <div>No page found</div>
  )
}

export default NoPage