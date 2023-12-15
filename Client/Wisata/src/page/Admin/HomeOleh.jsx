// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar_admin from '../../components/Navbar_admin '
import ListOleh from '../../components/Admin/listOlehOleh'
import FooterAdmin from '../../components/FooterAdmin'

const HomeOleh = () => {
  return (
    <div>
   <Navbar_admin/>
   <ListOleh />
   <div className='relative'>
         <FooterAdmin/>
   </div>

    </div>
  )
}

export default HomeOleh