"use server"

import { db } from "@/lib/db";
import { ContactDetails } from "@prisma/client";
import { v4 } from "uuid";

export const addContactDetails = async ({ email, message, name, phone}: Partial<ContactDetails>) => {

    if(!email && !message && !name ){
        throw new Error("Please fill all the fields");
    }

    try {
     
        const res = await db.contactDetails.create({
            data: {
                message,
                name,
                phone,
                id:v4(),
                email:email||"",
            }
        });
      if(res){
        return {
            status: 201,
            message: "Contact Details Added Successfully",  
            data: res,   
        }
      }
    } catch (error) {
        console.log(error);
            return {
                status: 500,
                message: "Contact Details Not Added",
            }
    }
}