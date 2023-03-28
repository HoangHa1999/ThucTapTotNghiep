using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace thuctaptotnghiep.Models
{
    public class CNhanvien
    {
        public string manv { get; set; }
        public string tennv { get; set; }
        public string ngaysinh { get; set; }
        public string cmndNv { get; set; }
        public string diachiNv { get; set; }
        public int sdtNv { get; set; }
        public string email { get; set; }
        public int gioitinh { get; set; }

        public List<Dichvu> Dichvus { get; set; }
    }
}
