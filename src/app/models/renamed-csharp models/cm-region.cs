﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace TrakGud.DAL.Models
{
    [Table("cm__Region")]
    public partial class CmRegion
    {
        public CmRegion()
        {
            CmCountries = new HashSet<CmCountry>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("name")]
        [StringLength(25)]
        public string Name { get; set; }

        [InverseProperty(nameof(CmCountry.Region))]
        public virtual ICollection<CmCountry> CmCountries { get; set; }
    }
}
