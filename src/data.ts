/* eslint-disable prettier/prettier */

interface data {
    report: {
        id: string,
        source: string,
        amount: number,
        createdAt: Date,
        updatedAt: Date,
        type: reportType,
    }[]
}

export enum reportType {
    INCOME="income",
    EXPENSE="expense"
}

export const data: data= {
    report:[
        {
            id:'1',
            source:'salary',
            amount:1950,
            createdAt: new Date(),
            updatedAt: new Date(),
            type: reportType.INCOME
        },
        {
            id:'2',
            source:'onlyfans',
            amount:1300,
            createdAt: new Date(),
            updatedAt: new Date(),
            type: reportType.EXPENSE
        },
        {
            id:'3',
            source:'freelance',
            amount:2600,
            createdAt: new Date(),
            updatedAt: new Date(),
            type: reportType.INCOME
        },
    ]
};

