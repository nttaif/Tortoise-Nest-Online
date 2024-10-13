import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  const invoices = [
    {
      coursesName: "Accounting",
      enrolled: "50",
      rating: "⭐⭐⭐⭐⭐",
      
    },
    {
        coursesName: "Marketing",
        enrolled: "43",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        coursesName: "Web Design",
        enrolled: "50",
        rating: "⭐⭐⭐⭐⭐",
    },
    {
        coursesName: "Graphic",
        enrolled: "50",
        rating: "⭐⭐⭐⭐⭐",
    },
  ]
export default function Tabledata() {
  return (
    <div className='bg-white rounded-xl text-black p-10 text-2xl font-semibold'>
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
            <TableRow>
                <TableHead >Courses Name</TableHead>
                <TableHead >Enrolled</TableHead>
                <TableHead >Rating</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {invoices.map((invoice) => (
                <TableRow key={invoice.coursesName}>
                <TableCell >{invoice.coursesName}</TableCell>
                <TableCell >{invoice.enrolled}</TableCell>
                <TableCell >{invoice.rating}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </div>
  )
}
