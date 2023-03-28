using System;
using System.Collections.Generic;

#nullable disable

namespace thuctaptotnghiep.Models
{
    public partial class Hoadon
    {
        public string Mahd { get; set; }
        public string Madv { get; set; }
        public string Maphieudatphong { get; set; }
        public DateTime Ngaylaphd { get; set; }
        public double Tongtien { get; set; }

        public virtual Dichvu MadvNavigation { get; set; }
        public virtual Phieudatphong MaphieudatphongNavigation { get; set; }
    }
}
