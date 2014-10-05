using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Blog.Models
{
    public class DatabaseModels
    {
        public int ID { get; set; }
        public string Imie { get; set; }
        public string Stanowisko { get; set; }
        public decimal Wynagrodzenie { get; set; }
    }
}