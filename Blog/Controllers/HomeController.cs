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
    }
}