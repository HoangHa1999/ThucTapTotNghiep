using System;
using System.Collections.Generic;

#nullable disable

namespace thuctaptotnghiep.Models
{
    public partial class PhongTienich
    {
        public string Maloaiphong { get; set; }
        public string Matienich { get; set; }

        public virtual Loaiphong MaloaiphongNavigation { get; set; }
        public virtual Tienich MatienichNavigation { get; set; }
    }
}
