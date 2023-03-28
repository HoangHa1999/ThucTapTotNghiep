using System;
using System.Collections.Generic;

#nullable disable

namespace thuctaptotnghiep.Models
{
    public partial class Dichvu
    {
        public Dichvu()
        {
            Hoadons = new HashSet<Hoadon>();
        }

        public string Madv { get; set; }
        public string Tendv { get; set; }
        public double Giadv { get; set; }
        public string Manv { get; set; }

        public virtual Nhanvien ManvNavigation { get; set; }
        public virtual ICollection<Hoadon> Hoadons { get; set; }
    }
}
