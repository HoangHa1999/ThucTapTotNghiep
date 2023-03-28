using System;
using System.Collections.Generic;

#nullable disable

namespace thuctaptotnghiep.Models
{
    public partial class Loaiphong
    {
        public Loaiphong()
        {
            PhongTieniches = new HashSet<PhongTienich>();
            Thuephongs = new HashSet<Thuephong>();
        }

        public string Maloaiphong { get; set; }
        public string Tenloaiphong { get; set; }
        public double Giaphong { get; set; }
        public string Chitiet { get; set; }

        public virtual ICollection<PhongTienich> PhongTieniches { get; set; }
        public virtual ICollection<Thuephong> Thuephongs { get; set; }
    }
}
