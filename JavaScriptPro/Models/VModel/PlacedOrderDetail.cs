using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JavaScriptPro.Models.VModel
{
    public class PlacedOrderDetail
    {
        public int Id { get; set; }
        public string Item { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public string Datetime { get; set; }
        public string customerName  { get; set; }

    }
}
