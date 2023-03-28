using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace thuctaptotnghiep.Models
{
    public class CLoaiphong
    {
        public string maloaiphong { get; set; }
        public string tenloaiphong { get; set; }
        public double giaphong { get; set; }
        public string chitiet { get; set; }

        public List<Phieudatphong> Phieudatphongs { get; set; }
        public List<CTienich> Tieniches { get; set; }
    }
}
