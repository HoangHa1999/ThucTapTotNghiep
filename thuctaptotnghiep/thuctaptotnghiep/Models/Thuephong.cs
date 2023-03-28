using System;
using System.Collections.Generic;

#nullable disable

namespace thuctaptotnghiep.Models
{
    public partial class Thuephong
    {
        public string Maphieudatphong { get; set; }
        public string Maloaiphong { get; set; }

        public virtual Loaiphong MaloaiphongNavigation { get; set; }
        public virtual Phieudatphong MaphieudatphongNavigation { get; set; }
    }
}
