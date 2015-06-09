---
chapters:
- the_basics
---

{% for chapter_name in page.chapters %}

{% capture chapter %}
{% include chapters/{{ chapter_name }}.md %}
{% endcapture %}

{{ chapter | markdownify }}

[Back To Top](#)

<br>
<hr>

{% endfor %}
