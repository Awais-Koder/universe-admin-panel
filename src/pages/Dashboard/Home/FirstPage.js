import React, { useEffect, useState } from 'react'
import Table from '../../../components/dashboard/Table'
import { collection, getDocs } from "firebase/firestore";
import {firestore} from '../../../config/firebase'
const FirstPage = () => {
  const [childrenProducts, setChildrenProducts] = useState([]);
  const [maleProducts, setMaleProducts] = useState([]);
  const [femaleProducts, setFemaleProducts] = useState([]);
  const getData = async (collectionName) => {
     
    const querySnapshot = await getDocs(collection(firestore, collectionName));
    querySnapshot.forEach((doc) => {
      if(collectionName === 'femaleProducts'){
        setFemaleProducts(s => [...s,doc.data()] );
      }
      else if(collectionName === 'maleProducts'){
        setMaleProducts(s => [...s,doc.data()] );
      }
      else{
      setChildrenProducts(s => [...s,doc.data()] );
      }
    });
  }
  useEffect(() => {
    getData('childrenProducts');
    getData('maleProducts');
    getData('femaleProducts');
  },[])
  return (
    <div>
      <Table data = {maleProducts} heading = 'Male Products'/>
      <Table data = {childrenProducts} heading = 'Children Products'/>
      <Table data = {femaleProducts} heading = 'Female Products'/>
    </div>
  )
}

export default FirstPage
