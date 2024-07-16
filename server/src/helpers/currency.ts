import mongoose from 'mongoose';

export class Currency extends mongoose.SchemaType {
  constructor(key: string, options: any) {
    super(key, options, 'Currency');
  }

  cast(val: any) {
    if (typeof val === 'string') {
      val = parseFloat(val.replace(/[^0-9.-]+/g, '')) * 100;
    } else if (typeof val === 'number') {
      val = val * 100;
    }

    if (isNaN(val)) {
      throw new Error(`Currency: ${val} is not a valid number`);
    }

    return val;
  }
}

// Register the custom type
mongoose.Schema.Types.Currency = Currency;

// Declare the custom type in Mongoose
declare module 'mongoose' {
  namespace Schema {
    namespace Types {
      export class Currency extends mongoose.SchemaType {}
    }
  }
}