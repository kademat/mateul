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

        public ActionResult CourseSQL()
        {
            ViewBag.Message = "Kurs SQL.";
            DatabaseModels[] db = 
            {
                new DatabaseModels(){ID = 1,Imie = "Paweł",Stanowisko = "Kierownik",Wynagrodzenie = 3000M},
                new DatabaseModels(){ID = 2,Imie = "Agata",Stanowisko = "Programista",Wynagrodzenie = 5500M},
                new DatabaseModels(){ID = 3,Imie = "Agata",Stanowisko = "Dyrektor",Wynagrodzenie = 7000M},
                new DatabaseModels(){ID = 4,Imie = "Rafał",Stanowisko = "Nauczyciel",Wynagrodzenie = 2300M},
                new DatabaseModels(){ID = 5,Imie = "Rafał",Stanowisko = "Kierownik",Wynagrodzenie = 4500M},
                new DatabaseModels(){ID = 6,Imie = "Marek",Stanowisko = "Kierownik",Wynagrodzenie = 5000M},
                new DatabaseModels(){ID = 7,Imie = "Kasia",Stanowisko = "Nauczyciel",Wynagrodzenie = 2500M},
                new DatabaseModels(){ID = 8,Imie = "Paweł",Stanowisko = "Zarządca",Wynagrodzenie = 7000M}
        };
            
            return View(db);
        }

        public ActionResult Running()
        {
            ViewBag.Message = "Running";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Opis.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Kontakt jest możliwy drogą mailową.";

            return View();
        }
    }
}