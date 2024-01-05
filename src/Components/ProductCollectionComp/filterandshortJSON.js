export const filterandshort_api = [
    {
        id : 1,
        tabName : "Availability",
        tabValue : 1,
        tabState : true,
        tabItems : [
            {
                input_type : "checkbox",
                input_label : "In Stock",
                input_item_value : 8,
                input_value : "In Stock",
                input_name : "in_stock",
                default_check : true,
            },
            {
                input_type : "checkbox",
                input_label : "Out of Stock",
                input_item_value : 8,
                input_value : "Out of Stock",
                input_name : "out_of_stock",
                default_check : false,
            },
        ] 
    },
    {
        id : 2,
        tabName : "Price",
        tabValue : null,
        tabState : true,
        tabItems : [
            {
                input_type : "range",
                input_label : "",
                input_item_value : null,
                input_value : "",
                input_name : "input_price",
                default_check : 50, // check the range of price
                minPrice : 0,
                maxPrice : 80
            },
        ] 
    },
    {
        id : 3,
        tabName : "Product Type",
        tabValue : 2,
        tabState : true,
        tabItems : [
            {
                input_type : "checkbox",
                input_label : "Hair",
                input_item_value : 8,
                input_value : "Hair",
                input_name : "input_hair",
                default_check : true,
            },
            {
                input_type : "checkbox",
                input_label : "Skin",
                input_item_value : 8,
                input_value : "Skin",
                input_name : "input_skin",
                default_check : true,
            },
            {
                input_type : "checkbox",
                input_label : "Face",
                input_item_value : 8,
                input_value : "Face",
                input_name : "input_face",
                default_check : false,
            },
            {
                input_type : "checkbox",
                input_label : "Body",
                input_item_value : 8,
                input_value : "Body",
                input_name : "input_body",
                default_check : false,
            },
        ] 
    },
    {
        id : 4,
        tabName : "Weight",
        tabValue : null,
        tabState : true,
        tabItems : [
            {
                input_type : "checkbox",
                input_label : "100 ml",
                input_item_value : 8,
                input_value : "100 ml",
                input_name : "input_100ml",
                default_check : false,
            },
            {
                input_type : "checkbox",
                input_label : "150 ml",
                input_item_value : 8,
                input_value : "150 ml",
                input_name : "input_150ml",
                default_check : false,
            },
            {
                input_type : "checkbox",
                input_label : "200ml",
                input_item_value : 8,
                input_value : "200 ml",
                input_name : "input_200ml",
                default_check : false,
            },
            {
                input_type : "checkbox",
                input_label : "250 ml",
                input_item_value : 8,
                input_value : "250 ml",
                input_name : "input_250ml",
                default_check : false,
            },
            {
                input_type : "checkbox",
                input_label : "300 ml",
                input_item_value : 8,
                input_value : "300 ml",
                input_name : "input_300ml",
                default_check : false,
            },
            {
                input_type : "checkbox",
                input_label : "450 ml",
                input_item_value : 8,
                input_value : "450 ml",
                input_name : "input_450ml",
                default_check : false,
            },
            {
                input_type : "checkbox",
                input_label : "750 ml",
                input_item_value : 8,
                input_value : "750 ml",
                input_name : "input_750ml",
                default_check : false,
            },
        ] 
    },

]