// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import React from 'react'
import Navbar_admin from '../../components/Navbar_admin '
import Gambar from '../../assets/images/Ghandi.jpg'
import FooterAdmin from '../../components/FooterAdmin'
import List_Kuliner from "../../components/Admin/listKuliner ";

const HomeKuliner = () => {
   return (
      <div>
         <List_Kuliner/>
         <Navbar_admin/>
     </div>
   )};
export default HomeKuliner