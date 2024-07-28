import AddTransaction from '@/components/AddTransaction';
import Balance from '@/components/Balance';
import Guest from '@/components/Guest';
import IncomeExpense from '@/components/IncomeExpense';
import TransactionList from '@/components/TransactionList';
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const HomePage = async () => {

  const user = await currentUser();

  if (!user) {
    return <Guest />
  }

  return (
    <main>
      <h2>Welcome , {user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </main>
  )
}

export default HomePage