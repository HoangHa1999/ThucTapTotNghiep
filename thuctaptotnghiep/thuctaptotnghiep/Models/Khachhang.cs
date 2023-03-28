using System;
using System.Collections.Generic;

#nullable disable

namespace thuctaptotnghiep.Models
{
    public partial class Khachhang
    {
        public Khachhang()
        {
            Phieudatphongs = new HashSet<Phieudatphong>();
        }

        public string Makh { get; set; }
        public string Tenkh { get; set; }
        public DateTime Ngaysinh { get; set; }
        public int Gioitinh { get; set; }
        public string Cmnd { get; set; }
        public int Sdt { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Phieudatphong> Phieudatphongs { get; set; }
    }
}
