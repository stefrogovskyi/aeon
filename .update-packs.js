const fs = require('fs');

const packs = JSON.parse(fs.readFileSync('packs.json', 'utf8'));

// Remove morning-briefing from any existing pack (shouldn't exist but be safe)
for (const pack of packs.packs) {
  pack.skills = pack.skills.filter(s => s.slug !== 'morning-briefing');
}

// Build the new skill entry
const newSkill = {
  slug: 'morning-briefing',
  name: 'morning-briefing',
  description: 'Friendly morning briefing — date, day-of-week, current weather (via wttr.in), and a sparkly motivational closer',
  category: 'productivity',
  source_repo: 'sparkleware/morning-briefing'
};

// Find or create the "installed" pack
let installedPack = packs.packs.find(p => p.key === 'installed');
if (!installedPack) {
  installedPack = {
    key: 'installed',
    name: 'Installed',
    description: 'Skills you installed from community repos (recorded in skills.lock). Always shown; never folded into a first-party pack.',
    color: '#A1A1AA',
    category: null,
    kind: 'community',
    default_enabled: [],
    skills: []
  };
  packs.packs.push(installedPack);
}
installedPack.skills.push(newSkill);

// Update totals
packs.total_packs = packs.packs.length;
packs.total_skills = (packs.total_skills || 184) + 1;
packs.generated = '2026-06-28T00:00:00Z';

fs.writeFileSync('packs.json', JSON.stringify(packs) + '\n');
console.log('Updated packs.json: total_packs =', packs.total_packs, ', total_skills =', packs.total_skills);
