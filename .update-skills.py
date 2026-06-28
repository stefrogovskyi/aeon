import json

with open('/home/runner/work/aeon/aeon/skills.json', 'r') as f:
    data = json.load(f)

new_skill = {
    'slug': 'morning-briefing',
    'name': 'morning-briefing',
    'description': 'Friendly morning briefing — date, day-of-week, current weather (via wttr.in), and a sparkly motivational closer',
    'category': 'productivity',
    'var': '',
    'files': 0,
    'sha': '04fc6b0',
    'updated': '2026-06-28',
    'install': './install-skill-pack sparkleware/morning-briefing morning-briefing',
    'source_repo': 'sparkleware/morning-briefing',
    'pack': 'Morning Briefing'
}

data['skills'] = [s for s in data['skills'] if s['slug'] != 'morning-briefing']
data['skills'].append(new_skill)
data['total'] = len(data['skills'])
data['generated'] = '2026-06-28T00:00:00Z'

with open('/home/runner/work/aeon/aeon/skills.json', 'w') as f:
    json.dump(data, f, separators=(',', ':'), ensure_ascii=False)

print('Updated skills.json: total =', data['total'])
