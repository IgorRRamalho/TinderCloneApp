using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TinderClone.Models
{
    internal class TinderCloneDataBaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DataBaseName { get; set; } = null!;

        public string UserCollectionName { get; set; } = null!;
    }
}
