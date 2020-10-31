import ErrorResponse from '../utils/errorResponse.js'
import asyncHandler from 'express-async-handler'
import PrimaryAccount from '../models/primaryAccountModel.js'
import SavingsAccount from '../models/savingsAccountModel.js'
import PrimaryTransaction from '../models/primaryTransactionModel.js'
import SavingsTransaction from '../models/savingsTransactionModel.js'
// import {
//   sum,
//   difference,
// } from '../utils/functions'

// @desc    Transfer - Between Accounts (Primary -> Savings and Vice Versa)
// @route   POST /api/transactions/transfer
// @access  Private
const transfer = asyncHandler(async (req, res, next) => {

  // Add User and Account to req body
  req.body.userRef = req.user.id;
  req.body.primaryAccountId = req.user.primaryAccountId;
  req.body.savingsAccountId = req.user.savingsAccountId;

  let transferFrom = req.body.type;
  let amount = req.body.amount;

  let transactions;
  let primaryAccount = await PrimaryAccount.findById(req.user.primaryAccountId);
  let savingsAccount = await SavingsAccount.findById(req.user.savingsAccountId);

  let primaryBalance = primaryAccount.accountBalance;
  // console.log(primaryBalance);
  let savingsBalance = savingsAccount.accountBalance;
  // console.log(savingsBalance);
  let primaryUpdatedBalance;
  let savingsUpdatedBalance;

  if (transferFrom === 'Primary') {
    // Account Balance must be >= withdrawal amount
    if (primaryBalance >= amount) {
      // Deduct amount from Primary Account
      primaryUpdatedBalance = primaryAccount.accountBalance -= amount;
      // primaryUpdatedBalance = difference(primaryAccount.accountBalance, amount);
      // console.log(primaryUpdatedBalance);
      primaryAccount.save();
      // Add Deducted amount to Savings Account
      savingsAccount.accountBalance += amount;
      // savingsAccount.accountBalance = sum(savingsAccount.accountBalance, amount);
      savingsAccount.save();
      // Update transaction status
      req.body.status = "Complete"
      req.body.description = `Transferred N${amount} from ${transferFrom} account to Savings account`;
      req.body.availableBalance = primaryUpdatedBalance;
      transactions = await PrimaryTransaction.create(req.body);
      // sendMail()
    } else {
      return next(
        new ErrorResponse(
          `Insufficient funds`,
          404
        )
      );
    }
  } else if (transferFrom === 'Savings') {
    // Account Balance must be >= withdrawal amount
    if (savingsBalance >= amount) {
      // Deduct amount from Savings Account
      savingsUpdatedBalance = savingsAccount.accountBalance -= amount;
      // savingsUpdatedBalance = difference(savingsAccount.accountBalance, amount);
      // console.log(savingsUpdatedBalance);
      savingsAccount.save();
      // Add Deducted amount Primary Account
      primaryAccount.accountBalance += amount;
      // primaryAccount.accountBalance = sum(primaryAccount.accountBalance, amount);
      primaryAccount.save();
      // Update transaction status
      req.body.status = "Complete"
      req.body.description = `Transferred ${amount} from ${transferFrom} account to Primary account`;
      req.body.availableBalance = savingsUpdatedBalance;
      transactions = await SavingsTransaction.create(req.body);
      // sendMail()
    } else {
      return next(
        new ErrorResponse(
          `Insufficient funds`,
          404
        )
      );
    }
  } else {
    return next(
      new ErrorResponse(
        `Insufficient parameters`,
        404
      )
    );
  }

  res.status(201).json({
    success: true,
    data: transactions
  });
});

// @desc    Transfer - To Someone else
// @route   POST /api/transactions/transfer/out
// @access  Private
const transferOut = asyncHandler(async (req, res, next) => {

  // Add User and Account to req body
  req.body.userRef = req.user.id;
  req.body.primaryAccountId = req.user.primaryAccountId;
  req.body.savingsAccountId = req.user.savingsAccountId;

  let recipientAccountNumber = req.body.accountNumber;
  let recipientAccountType = req.body.type;
  let transferFrom = req.body.transferFrom;
  let amount = req.body.amount;

  // Check if accountNumber exist in PrimaryAccount and SavingsAccount
  let pryAccountExist = await PrimaryAccount.findOne({
    primaryAccountNumber: recipientAccountNumber
  }).populate({
    path: 'userRef',
    select: 'firstName lastName',
  });

  // console.log(pryAccountExist);
  let savAccountExist = await SavingsAccount.findOne({
    savingsAccountNumber: recipientAccountNumber
  }).populate({
    path: 'userRef',
    select: 'firstName lastName',
  });
  // console.log(savAccountExist);

  let transactions;
  let primaryAccount = await PrimaryAccount.findById(req.user.primaryAccountId);
  let savingsAccount = await SavingsAccount.findById(req.user.savingsAccountId);

  let primaryBalance = primaryAccount.accountBalance;
  // console.log(primaryBalance);
  let savingsBalance = savingsAccount.accountBalance;
  // console.log(savingsBalance);
  let primaryUpdatedBalance;
  let savingsUpdatedBalance;

  if (recipientAccountType === 'Primary' && pryAccountExist) {
    if (transferFrom === 'Primary') {
      // Account Balance must be >= withdrawal amount
      if (primaryBalance >= amount) {
        // Deduct amount from Primary Account
        primaryUpdatedBalance = primaryAccount.accountBalance -= amount;
        // primaryUpdatedBalance = difference(primaryAccount.accountBalance, amount);
        // console.log(primaryUpdatedBalance);
        primaryAccount.save();
        // Add Deducted amount to Sendee Primary Account
        pryAccountExist.accountBalance += amount;
        // pryAccountExist.accountBalance = sum(pryAccountExist.accountBalance, amount);
        pryAccountExist.save();
        // Update transaction status
        req.body.status = "Complete"
        req.body.description = `Transferred N${amount} from ${transferFrom} account to ${pryAccountExist.userRef.firstName} ${pryAccountExist.userRef.lastName} ${recipientAccountType} account`;
        req.body.availableBalance = primaryUpdatedBalance;
        transactions = await PrimaryTransaction.create(req.body);
      } else {
        return next(
          new ErrorResponse(
            `Insufficient funds`,
            404
          )
        );
      }
    } else if (transferFrom === 'Savings') {
      // Account Balance must be >= withdrawal amount
      if (savingsBalance >= req.body.amount) {
        // Deduct amount from Savings Account
        savingsUpdatedBalance = savingsAccount.accountBalance -= amount;
        // savingsUpdatedBalance = difference(savingsAccount.accountBalance, amount);
        // console.log(savingsUpdatedBalance);
        savingsAccount.save();
        // Add Deducted amount to Sendee Savings Account
        pryAccountExist.accountBalance += amount;
        // pryAccountExist.accountBalance = sum(pryAccountExist.accountBalance, amount);
        pryAccountExist.save();
        // Update transaction status
        req.body.status = "Complete"
        req.body.description = `Transferred N${amount} from ${transferFrom} account to ${pryAccountExist.userRef.firstName} ${pryAccountExist.userRef.lastName} ${recipientAccountType} account`;
        req.body.availableBalance = savingsUpdatedBalance;
        transactions = await SavingsTransaction.create(req.body);
      } else {
        return next(
          new ErrorResponse(
            `Insufficient funds`,
            404
          )
        );
      }
    } else {
      return next(
        new ErrorResponse(
          `Invalid parameters`,
          404
        )
      );
    }

  } else if (recipientAccountType === 'Savings' && savAccountExist) {
    if (transferFrom === 'Primary') {
      // Account Balance must be >= withdrawal amount
      if (primaryBalance >= amount) {
        // Deduct amount from Primary Account
        primaryUpdatedBalance = primaryAccount.accountBalance -= req.body.amount;
        // primaryUpdatedBalance = difference(primaryAccount.accountBalance, req.body.amount);
        // console.log(primaryUpdatedBalance);
        primaryAccount.save();
        // Add Deducted amount to Sendee Primary Account
        savAccountExist.accountBalance += amount;
        // savAccountExist.accountBalance = sum(savAccountExist.accountBalance, amount);
        savAccountExist.save();
        // Update transaction status
        req.body.status = "Complete"
        req.body.description = `Transferred N${amount} from ${transferFrom} account to ${savAccountExist.userRef.firstName} ${savAccountExist.userRef.lastName} ${recipientAccountType} account`;
        req.body.availableBalance = primaryUpdatedBalance;
        transactions = await PrimaryTransaction.create(req.body);
      } else {
        return next(
          new ErrorResponse(
            `Insufficient funds`,
            404
          )
        );
      }
    } else if (transferFrom === 'Savings') {
      // Account Balance must be >= withdrawal amount
      if (savingsBalance >= req.body.amount) {
        // Deduct amount from Savings Account
        savingsUpdatedBalance = savingsAccount.accountBalance -= req.body.amount;
        // savingsUpdatedBalance = difference(savingsAccount.accountBalance, req.body.amount);
        // console.log(savingsUpdatedBalance);
        savingsAccount.save();
        // Add Deducted amount to Sendee Savings Account
        savAccountExist.accountBalance += amount;
        // savAccountExist.accountBalance = sum(savAccountExist.accountBalance, amount);
        savAccountExist.save();
        // Update transaction status
        req.body.status = "Complete"
        req.body.description = `Transferred N${amount} from ${transferFrom} account to ${savAccountExist.userRef.firstName} ${savAccountExist.userRef.lastName} ${recipientAccountType} account`;
        req.body.availableBalance = savingsUpdatedBalance;
        transactions = await SavingsTransaction.create(req.body);
      } else {
        return next(
          new ErrorResponse(
            `Insufficient funds`,
            404
          )
        );
      }
    } else {
      return next(
        new ErrorResponse(
          `Invalid parameters`,
          404
        )
      );
    }
  } else {
    return next(
      new ErrorResponse(
        `Sendee must be a StarkTechBank account holder`,
        400
      )
    );
  }

  res.status(201).json({
    success: true,
    data: transactions
  });
});

// @desc    Deposit v3
// @route   POST /api/transactions/deposit
// @access  Private
const deposit = asyncHandler(async (req, res, next) => {

	let {
		type,
		amount
	} = req.body;

  // let description = req.body.description;
  // let type = req.body.type;
  // let status = req.body.status;
  // let amount = req.body.amount;

  // Add User and Account to req body
  req.body.userRef = req.user.id;
  req.body.primaryAccountId = req.user.primaryAccountId;
  req.body.savingsAccountId = req.user.savingsAccountId;

  let transactions;
  let primaryAccount = await PrimaryAccount.findById(req.body.primaryAccountId);
  let savingsAccount = await SavingsAccount.findById(req.body.savingsAccountId);

  if (!type) {
    return next(
      new ErrorResponse(
        `Type is not inputed`,
        404
      )
    );
  }

  if (amount <= 0 ) {
    return next(
      new ErrorResponse(
        `Please input amount`,
        404
      )
    );
  }

  if (type == "Primary") {
    // Deposit into Primary Account
    if (primaryAccount) {
      primaryAccount.accountBalance += amount;
      // primaryAccount.accountBalance = sum(primaryAccount.accountBalance, req.body.amount);
      primaryAccount.save();
      
      req.body.description = `Deposit of N${amount} into Primary account`;
      req.body.status = "Complete"
      req.body.availableBalance = primaryAccount.accountBalance;
      transactions = await PrimaryTransaction.create(req.body);
    } else {
      return next(
        new ErrorResponse(
          `${type} Account number not found`,
          404
        )
      );
    }

    res.status(201).json({
      success: true,
      data: transactions
    });

  } else if (type == "Savings") {
    // Deposit into Savings Account
    if (savingsAccount) {
      savingsAccount.accountBalance += amount;
      // savingsAccount.accountBalance = sum(savingsAccount.accountBalance, req.body.amount);
      savingsAccount.save();
      
      req.body.description = `Deposit of N${amount} into Savings account`;
      req.body.status = "Complete"
      req.body.availableBalance = savingsAccount.accountBalance;
      transactions = await SavingsTransaction.create(req.body);
    } else {
      return next(
        new ErrorResponse(
          `${type} Account number not found`,
          404
        )
      );
    }

    res.status(201).json({
      success: true,
      data: transactions
    });

  } else {
    return next(
      new ErrorResponse(
        `Please fill in all parameters`,
        404
      )
    );
  }
})

// @desc    Withdraw v3
// @route   POST /api/transactions/withdrawal
// @access  Private
const withdraw = asyncHandler(async (req, res, next) => {
  
  let type = req.body.type;

  // Add User and Account to req body
  req.body.userRef = req.user.id;
  req.body.primaryAccountId = req.user.primaryAccountId;
  req.body.savingsAccountId = req.user.savingsAccountId;

  let transactions;
  let primaryAccount = await PrimaryAccount.findById(req.body.primaryAccountId);
  let savingsAccount = await SavingsAccount.findById(req.body.savingsAccountId);

  if (!req.body.amount) {
    return next(
      new ErrorResponse(
        `Amount is not inputed`,
        404
      )
    );
  }

  if (type === 'Primary') {
    // Withdraw from Primary Account
    // Account Balance must be >= withdrawal amount
    if (primaryAccount.accountBalance >= req.body.amount) {
      primaryAccount.accountBalance -= req.body.amount;
      // primaryAccount.accountBalance = difference(primaryAccount.accountBalance, req.body.amount);
      primaryAccount.save();

      //
      // req.body.description = "Primary Account Withdrawal"
      req.body.description = `Withdrawal of N${req.body.amount} from Primary account`;
      req.body.status = "Complete"
      req.body.availableBalance = primaryAccount.accountBalance;
      transactions = await PrimaryTransaction.create(req.body);
    } else {
      return next(
        new ErrorResponse(
          `Insufficient funds`,
          404
        )
      );
    }

    res.status(201).json({
      success: true,
      data: transactions
    });

  } else if (type === 'Savings') {
    // Withdraw from Savings Account
    // Account Balance must be >= withdrawal amount
    if (savingsAccount.accountBalance >= req.body.amount) {
      savingsAccount.accountBalance -= req.body.amount;
      // savingsAccount.accountBalance = difference(savingsAccount.accountBalance, req.body.amount);
      savingsAccount.save();
  
      //
      // req.body.description = "Savings Account Withdrawal"
      req.body.description = `Withdrawal of N${req.body.amount} from Savings account`;
      req.body.status = "Complete"
      req.body.availableBalance = savingsAccount.accountBalance;
      transactions = await SavingsTransaction.create(req.body);
    } else {
      return next(
        new ErrorResponse(
          `Insufficient funds`,
          404
        )
      );
    }

    res.status(201).json({
      success: true,
      data: transactions
    });

  } else {
    return next(
      new ErrorResponse(
        `Please fill in all parameters`,
        404
      )
    );
  }
})

export { transfer, transferOut, deposit, withdraw }