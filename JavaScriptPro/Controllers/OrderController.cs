using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JavaScriptPro.Controllers;
using JavaScriptPro.Models;
using JavaScriptPro.Models.VModel;

namespace JavaScriptPro.Controllers
{
    public class OrderController : Controller
    {
        public OrderController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public ApplicationDbContext DbContext { get; }

        public IActionResult Orders()
        {
            return View();
        }

        public IActionResult GetMenus()
        {
            var menus = DbContext.Menus.ToList();
            return Json(menus);
        }
        [HttpPost]
        public IActionResult PlaceOrder(Order order)
        {
            order.Datetime = DateTime.Now.ToString();
            DbContext.Orders.Add(order);
            DbContext.SaveChanges();


            var orderSummery = (from o in DbContext.Orders
                                join
                                m in DbContext.Menus
                                on o.ItemId equals m.Id

                                select new PlacedOrderDetail()
                                {
                                    Id = o.Id,
                                    Item = m.Item,
                                    Price = m.Price,
                                    Datetime = o.Datetime,
                                    Quantity=o.Quantity
                                    
                                }).ToList();

         
            return Json(orderSummery);
        }
        public IActionResult SampleForm()
        {
            return View();
        }
    }
}
