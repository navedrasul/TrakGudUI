﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace TrakGud.DAL.Models
{
    [Table("sm__ShipmentLocationType")]
    public partial class SmShipmentLocationType
    {
        public SmShipmentLocationType()
        {
            SmShipmentLocations = new HashSet<SmShipmentLocation>();
        }

        [Key]
        [Column("value")]
        [StringLength(25)]
        public string Value { get; set; }
        [Required]
        [Column("text")]
        [StringLength(25)]
        public string Text { get; set; }

        [InverseProperty(nameof(SmShipmentLocation.TypeNavigation))]
        public virtual ICollection<SmShipmentLocation> SmShipmentLocations { get; set; }
    }
}
