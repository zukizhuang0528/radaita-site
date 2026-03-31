Use the three attached dropdown header designs as the single source of truth for the header and navigation system.

Your task is to inspect every page in the current Figma Make file and make sure all pages use the same header style and dropdown style, recreated as closely as possible to the attached designs.

This is not a redesign.
Do not reinterpret, simplify, optimize, or restyle the header or dropdown system.
This is a full consistency and linking pass across all pages.

⸻

Main task

Please inspect all pages in the current Figma Make file one by one and ensure that:
	1.	every page uses the same header style and dropdown style shown in the attached designs
	2.	the header and dropdowns are recreated 1:1 as closely as possible from the attached designs
	3.	all specified links go to the correct corresponding pages
	4.	the dropdown interactions work exactly as specified below
	5.	the icons used in dropdown items match the meaning of each item, and are replaced where necessary with more appropriate icons

⸻

1. Header and dropdown consistency across all pages

Please check every page in the current file individually.

For each page:
	•	verify whether the header matches the attached design
	•	if it does not match, replace it with the correct version
	•	verify whether the dropdown style matches the attached design
	•	if it does not match, replace it with the correct version

Important

There should be only one consistent header system across all pages.
Do not leave older header variants behind.
Do not keep different dropdown versions on different pages.

Preserve the attached header design as closely as possible in:
	•	layout
	•	spacing
	•	typography
	•	dropdown composition
	•	item grouping
	•	icon placement
	•	visual density
	•	relationship between header and dropdown panel

⸻

2. Link mapping requirements

Please make sure the following items link to the correct corresponding pages:
	•	Logo → Home (Landing page)
	•	Platform Architecture → platform-architecture
	•	Data Collection → data-collection
	•	Data Annotation → data-annotation
	•	Generative AI & LLMs → llm
	•	Autonomous Driving → autonomous-driving
	•	Voice & Speech AI → speech-ai
	•	Robotics & Embodied AI → embodied-ai
	•	Medical AI Solutions → healthcare-ai
	•	About us → about
	•	Teams → teams
	•	Contact → contact

Important

Any menu item not explicitly listed above should have no link.

Do not assign placeholder links.
Do not invent extra linked destinations.
Do not auto-link items that are not listed.

⸻

1. Dropdown interaction behavior

The dropdown interaction should follow this exact behavior:

Open behavior
	•	clicking the corresponding top-level menu item opens its dropdown

This applies to:
	•	Products
	•	Industries
	•	Company

Close behavior
	•	clicking anywhere outside the dropdown panel area closes the dropdown
	•	the top-level menu item itself is not considered part of the dropdown area
	•	so if the dropdown is open and the user clicks the top-level menu item area again or elsewhere outside the dropdown panel, the dropdown should close

Important

The interaction should feel stable and intentional:
	•	no hover-open behavior
	•	no flicker
	•	no accidental collapse while inside the dropdown panel
	•	dropdown should behave like a controlled click-open / click-outside-close panel

⸻

4. Secondary menu hover behavior

For all dropdown secondary items:
	•	on hover, only the main title text should change from white to purple
	•	supporting description text should remain unchanged unless already required by the attached design
	•	do not add a new background highlight
	•	do not add a glow
	•	do not add unrelated hover effects

This hover behavior should be applied consistently across all dropdown menus.

⸻

5. Icon verification and replacement

Please review all dropdown items that include icons and confirm whether the current icon matches the meaning of the item.

If an icon is not appropriate, replace it with a more suitable one.

Use icon choices that are consistent with:
	•	the attached design language
	•	the current site style
	•	the meaning of each menu item

Especially verify these item/icon relationships:
	•	Platform Architecture
	•	Data Collection
	•	Data Annotation
	•	Generative AI & LLMs
	•	Autonomous Driving
	•	Voice & Speech AI
	•	Robotics & Embodied AI
	•	Medical AI Solutions
	•	About us
	•	Teams
	•	Contact

Do not use random or decorative icons.
Choose icons that clearly match the function or category of each item.

⸻

Scope control

Do not redesign any page body content.
Do not change hero sections or page layouts.
Do not rewrite unrelated text.
Do not modify unrelated components.

Only perform:
	•	full header consistency check across all pages
	•	dropdown consistency check across all pages
	•	link mapping correction
	•	interaction correction
	•	icon verification and replacement where needed

⸻

Final expectation

After this update:
	•	every page in the current Figma Make file uses the same header and dropdown system
	•	the header and dropdown style are restored 1:1 as closely as possible from the attached designs
	•	all specified menu items link to the correct corresponding pages
	•	all unspecified items have no links
	•	Products / Industries / Company dropdowns open on click
	•	dropdowns close when clicking outside the dropdown panel area
	•	secondary menu items hover by changing only the main title text from white to purple
	•	all dropdown icons are checked and replaced with more appropriate ones if needed
	•	no old header variants remain anywhere in the file