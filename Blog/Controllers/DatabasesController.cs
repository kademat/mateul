using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace jstcode.Controllers
{
    public class DatabasesController : Controller
    {
        // GET: Databases
        public ActionResult Index()
        {
            return View();
        }
    }
}