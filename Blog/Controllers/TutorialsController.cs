using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Controllers
{
    public class TutorialsController : Controller
    {
        // GET: Tutorials
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GITBasics()
        {
            return View();
        }
    }
}