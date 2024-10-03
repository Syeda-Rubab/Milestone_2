import React from "react";


const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block"> 
        <div className="container py-4">
            <div className="">
                <div className=" text-center text-gray-500 text-[13px]">
                <b>FREE SHIPPING</b> THIS 15 Dys ORDER OVER - $40
               </div>

               <div className="absolute -top-0 fixed left-96 flex pl-96 pt-6 ml-96  flex gap-4">
                <select 
                className="text-gray-500 text-[12px] w-[60px] ml-56"
                name="currency"
                id="currency" >

                    <option value="USD $">USD $</option>
                    <option value="EUR €">EUR €</option>
                    <option value="PKR">PKR</option>
                    <option value="AED">AED</option>
                    <option value="GBP">GBP £</option>
                </select>

                <select 
                className="text-gray-500 text-[12px] w-[60px]"
                name="language"
                id="language">

                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Urdu">اردو</option>
                </select>
               </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop;