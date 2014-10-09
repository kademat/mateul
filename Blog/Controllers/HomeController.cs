using Blog.Models;
using System.Web.Mvc;

namespace Blog.Controllers
{
    public class HomeController : Controller
    {


        public ActionResult Index(int? id)
        {
            return View(id);
        }

        public ActionResult Running()
        {
            ViewBag.Message = "Running";
            return View();
        }

        public ActionResult Tutorials()
        {
            ViewBag.Message = "Tutorials";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "About me";
            return View();
        }
    }
}