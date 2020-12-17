﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace TrakGud.DAL.Models
{
    [Table("um__User_Role")]
    public partial class UmUserRole
    {
        [Key]
        [Column("userId")]
        public int UserId { get; set; }
        [Key]
        [Column("roleId")]
        public int RoleId { get; set; }
        [Column("addTS", TypeName = "timestamp with time zone")]
        public DateTime AddTs { get; set; }
        [Column("adderId")]
        public int AdderId { get; set; }
        [Column("modderId")]
        public int? ModderId { get; set; }
        [Column("isRemoved")]
        public bool? IsRemoved { get; set; }
        [Column("modTS", TypeName = "timestamp with time zone")]
        public DateTime? ModTs { get; set; }

        [ForeignKey(nameof(AdderId))]
        [InverseProperty(nameof(UmUser.UmUserRoleAdders))]
        public virtual UmUser Adder { get; set; }
        [ForeignKey(nameof(ModderId))]
        [InverseProperty(nameof(UmUser.UmUserRoleModders))]
        public virtual UmUser Modder { get; set; }
        [ForeignKey(nameof(RoleId))]
        [InverseProperty(nameof(UmRole.UmUserRoles))]
        public virtual UmRole Role { get; set; }
        [ForeignKey(nameof(UserId))]
        [InverseProperty(nameof(UmUser.UmUserRoleUsers))]
        public virtual UmUser User { get; set; }
    }
}
