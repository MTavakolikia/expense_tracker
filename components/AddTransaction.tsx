"use client"

import addTransaction from "@/app/actions/addTransaction"
import { useRef } from "react"
import { toast } from "react-toastify"

const AddTransaction = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async (formData: FormData) => {
        const { data, error } = await addTransaction(formData)
        if (error) {
            toast.error(error)
        } else {
            formRef.current?.reset()
            toast.success("Transaction added")
        }
    }
    return (
        <>
            <h3>Add transaction</h3>
            <form action={clientAction} ref={formRef}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" name="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <hr /> (negative - expense , positive - income )</label>
                    <input type="number" name="amount" id="amount" placeholder="Enter amount..." step="0.01" />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction