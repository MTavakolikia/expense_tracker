"use client"

import deleteTransaction from "@/app/actions/deleteTransaction"
import { addCommas } from "@/app/lib/utils"
import { Transaction } from "@/app/types/Transaction"
import { toast } from "react-toastify"

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
    const sign = transaction.amount < 0 ? "-" : "+"

    const handleDeleteTransaction = async (transactionId: string) => {
        const confirmed = window.confirm("Are you sure ?")

        if (!confirmed) return

        const { message, error } = await deleteTransaction(transactionId)

        if (error) return toast.error(error)
        toast.success(message)
    }
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>{transaction.text}
            <span>{sign}${addCommas(Math.abs(transaction.amount))}</span>
            <button onClick={() => handleDeleteTransaction(transaction.id)} className="delete-btn">*</button>
        </li>
    )
}

export default TransactionItem