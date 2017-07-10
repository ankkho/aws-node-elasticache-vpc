'use strict'

// Allows billers/invoicers to create invoice based on invoiceId or customers mobileNumber

const lib = require('../../lib')

exports.handler = (event, context) => lib.getAllProducts(event, (error, response) => context.done(error, response))
