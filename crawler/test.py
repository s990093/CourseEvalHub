import requests

url = "https://webap.nkust.edu.tw/nkust/ag_pro/ag202.jsp"
response = requests.get(url, verify=False)

if response.status_code == 200:
    html_content = response.text
    with open("nkust_html.html", "w", encoding="utf-8") as file:
        file.write(html_content)
    print("HTML 文件已下载完成。")
else:
    print("无法下载 HTML 文件。")
