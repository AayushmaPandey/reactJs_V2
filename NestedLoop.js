const costumer=[
    {
        custId:1,
        name:"aayushma",
        bought:[
            {id:1,name:"gown"},
            {id:2,name:"lipstick"},
        ],
    },
    {
        cusId:2,
        name:"amir",
        bought:[
            {id:3,name:"curd"},
            {id:1,name:"gown"},
        ],
    },
    {
        cusId:3,
        name:"pari",
        bought:[
            {id:5,name:"kurthi"},
            {id:2,name:"lipstick"},
        ],
    },
];
const customerResponse ={
    status:200,
    message:"customer fetched successfully",
    data:costumer,

}
const getProductsName = ()=> {
     if(customerResponse.status ===200){
        let  boughtItems = []
        customerResponse.data.forEach((customer)=>{
            customer.bought.map((item)=>{
                 boughtItems.push(item.name)
            });
        });
        return boughtItems;
     }
};
// console.log(getProductsName())
// // data={
//     lipstick:2,
//     nailpolish:2,shoes:1,

// }
const getProductNumber=()=>{
    if(customerResponse.status===200){
        let productNumbers={};
        customerResponse.data.forEach((customer)=>{
            customer.bought.map((item)=>{
                {
                    if(productNumbers[item.id]){
                        productNumbers[item.id] +=1;

                    }else{
                        productNumbers[item.id]=1;
                    }
                }
            });
        });
        return productNumbers;
    }
};
console.log(getProductNumber());





