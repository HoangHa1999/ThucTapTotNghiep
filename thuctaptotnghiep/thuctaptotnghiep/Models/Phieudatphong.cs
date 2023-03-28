using System;
using System.Collections.Generic;

#nullable disable

namespace thuctaptotnghiep.Models
{
    public partial class Phieudatphong
    {
        public Phieudatphong()
        {
            Hoadons = new HashSet<Hoadon>();
            Thuephongs = new HashSet<Thuephong>();
        }

        public string Maphieudatphong { get; set; }
        public string Makh { get; set; }
        public DateTime Ngayden { get; set; }
        public DateTime Ngaydi { get; set; }

        public virtual Khachhang MakhNavigation { get; set; }
        public virtual ICollection<Hoadon> Hoadons { get; set; }
        public virtual ICollection<Thuephong> Thuephongs { get; set; }
    }
}
