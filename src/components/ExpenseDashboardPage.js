import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
        <ExpensesSummary/>
        <ExpenseList />
        <ExpenseListFilters />
  </div>
);

export default ExpenseDashboardPage;
