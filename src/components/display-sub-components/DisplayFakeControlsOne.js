import React from "react";

import {generateFakeButtons} from "../../utilities/fakeButtons"

function DisplayFakeControlsOne() {

  // Type of fake buttons
  const fakeBtn = {type: "FakeButton", numOfDivs: 4, classes: {class: "display-fake-button-1", black: "black"}}

  return (
    <div className="display-fake-controls-1">
      <div className="display-fake-buttons-1">
        {/* 4 <div key={i} className="display-fake-button-2 black"></div>
              <div key={i} className="display-fake-button-1"></div> */}
        {generateFakeButtons(fakeBtn)}
      </div>

      <div className="display-fake-volume">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTUwMiAyNTZjMCAxMzUuODYzMjgxLTExMC4xMzY3MTkgMjQ2LTI0NiAyNDZzLTI0Ni0xMTAuMTM2NzE5LTI0Ni0yNDYgMTEwLjEzNjcxOS0yNDYgMjQ2LTI0NiAyNDYgMTEwLjEzNjcxOSAyNDYgMjQ2em0wIDAiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiM2NzY3NjciIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMTUuMzE2NDA2IDQ0Ny44MjQyMTljLTg4Ljc0NjA5NC0xOC43MTQ4NDQtMTU1LjM1OTM3NS05Ny40Njg3NS0xNTUuMzU5Mzc1LTE5MS43ODEyNSAwLTEwOC4yNDYwOTQgODcuNzUtMTk2IDE5Ni0xOTYgMTA4LjI0NjA5NCAwIDE5NiA4Ny43NTM5MDYgMTk2IDE5NiAwIDk0LjQyOTY4Ny02Ni43NzczNDMgMTczLjI2MTcxOS0xNTUuNjg3NSAxOTEuODUxNTYyIiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjOTM5NDk3IiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMzUyIDI1NmMwIDUzLjAxOTUzMS00Mi45ODA0NjkgOTYtOTYgOTZzLTk2LTQyLjk4MDQ2OS05Ni05NiA0Mi45ODA0NjktOTYgOTYtOTYgOTYgNDIuOTgwNDY5IDk2IDk2em0wIDAiIGZpbGw9IiMwMDAwMDAiIGRhdGEtb3JpZ2luYWw9IiM2NzY3NjciIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYgNTEyYy02OC4zNzg5MDYgMC0xMzIuNjY3OTY5LTI2LjYyODkwNi0xODEuMDE5NTMxLTc0Ljk4MDQ2OS00OC4zNTE1NjMtNDguMzUxNTYyLTc0Ljk4MDQ2OS0xMTIuNjQwNjI1LTc0Ljk4MDQ2OS0xODEuMDE5NTMxczI2LjYyODkwNi0xMzIuNjY3OTY5IDc0Ljk4MDQ2OS0xODEuMDE5NTMxYzQ4LjM1MTU2Mi00OC4zNTE1NjMgMTEyLjY0MDYyNS03NC45ODA0NjkgMTgxLjAxOTUzMS03NC45ODA0NjlzMTMyLjY2Nzk2OSAyNi42Mjg5MDYgMTgxLjAxOTUzMSA3NC45ODA0NjljNDguMzUxNTYzIDQ4LjM1MTU2MiA3NC45ODA0NjkgMTEyLjY0MDYyNSA3NC45ODA0NjkgMTgxLjAxOTUzMXMtMjYuNjI4OTA2IDEzMi42Njc5NjktNzQuOTgwNDY5IDE4MS4wMTk1MzFjLTQ4LjM1MTU2MiA0OC4zNTE1NjMtMTEyLjY0MDYyNSA3NC45ODA0NjktMTgxLjAxOTUzMSA3NC45ODA0Njl6bTAtNDkyYy02My4wMzkwNjIgMC0xMjIuMzA0Njg4IDI0LjU0Njg3NS0xNjYuODc4OTA2IDY5LjEyMTA5NC00NC41NzQyMTkgNDQuNTc0MjE4LTY5LjEyMTA5NCAxMDMuODM5ODQ0LTY5LjEyMTA5NCAxNjYuODc4OTA2czI0LjU0Njg3NSAxMjIuMzA0Njg4IDY5LjEyMTA5NCAxNjYuODc4OTA2YzQ0LjU3NDIxOCA0NC41NzQyMTkgMTAzLjgzOTg0NCA2OS4xMjEwOTQgMTY2Ljg3ODkwNiA2OS4xMjEwOTRzMTIyLjMwNDY4OC0yNC41NDY4NzUgMTY2Ljg3ODkwNi02OS4xMjEwOTRjNDQuNTc0MjE5LTQ0LjU3NDIxOCA2OS4xMjEwOTQtMTAzLjgzOTg0NCA2OS4xMjEwOTQtMTY2Ljg3ODkwNnMtMjQuNTQ2ODc1LTEyMi4zMDQ2ODgtNjkuMTIxMDk0LTE2Ni44Nzg5MDZjLTQ0LjU3NDIxOC00NC41NzQyMTktMTAzLjgzOTg0NC02OS4xMjEwOTQtMTY2Ljg3ODkwNi02OS4xMjEwOTR6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI5Ni4yNjE3MTkgNDU3Ljg5NDUzMWMtNC42MzY3MTkgMC04Ljc5Mjk2OS0zLjIzODI4MS05Ljc4MTI1LTcuOTUzMTI1LTEuMTI4OTA3LTUuNDA2MjUgMi4zMzU5MzctMTAuNzA3MDMxIDcuNzQyMTg3LTExLjgzNTkzNyA0MS4xNjc5NjktOC42MDU0NjkgNzguNjM2NzE5LTMxLjM1MTU2MyAxMDUuNTA3ODEzLTY0LjA0Njg3NSAyNy4yMzA0NjktMzMuMTMyODEzIDQyLjIyNjU2Mi03NS4wNDI5NjkgNDIuMjI2NTYyLTExOC4wMTU2MjUgMC0xMDIuNTYyNS04My40Mzc1LTE4Ni0xODYtMTg2cy0xODYgODMuNDM3NS0xODYgMTg2YzAgNDIuOTE0MDYyIDE0Ljk2MDkzOCA4NC43ODUxNTYgNDIuMTMyODEzIDExNy44OTg0MzcgMjYuODA0Njg3IDMyLjY2Nzk2OSA2NC4xOTUzMTIgNTUuNDMzNTk0IDEwNS4yODkwNjIgNjQuMDk3NjU2IDUuNDA2MjUgMS4xNDA2MjYgOC44NjMyODIgNi40NDUzMTMgNy43MjI2NTYgMTEuODQ3NjU3LTEuMTQwNjI0IDUuNDA2MjUtNi40NDE0MDYgOC44NjMyODEtMTEuODQ3NjU2IDcuNzIyNjU2LTQ1LjUyNzM0NC05LjYwMTU2My04Ni45NDUzMTItMzQuODA4NTk0LTExNi42MjUtNzAuOTgwNDY5LTMwLjA5NzY1Ni0zNi42Nzk2ODctNDYuNjcxODc1LTgzLjA1NDY4Ny00Ni42NzE4NzUtMTMwLjU4NTkzNyAwLTExMy41ODk4NDQgOTIuNDEwMTU3LTIwNiAyMDYtMjA2IDExMy41ODk4NDQgMCAyMDYgOTIuNDEwMTU2IDIwNiAyMDYgMCA0Ny41OTM3NS0xNi42MDkzNzUgOTQuMDE1NjI1LTQ2Ljc3NzM0MyAxMzAuNzE4NzUtMjkuNzUgMzYuMTk5MjE5LTcxLjI1MzkwNyA2MS4zODY3MTktMTE2Ljg2MzI4MiA3MC45MjE4NzUtLjY5MTQwNi4xNDA2MjUtMS4zNzg5MDYuMjEwOTM3LTIuMDU0Njg3LjIxMDkzN3ptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjU1Ljk3NjU2MiA0NjIuMTY0MDYyYy01LjUyMzQzNyAwLTEwLjAwMzkwNi00LjQ3NjU2Mi0xMC4wMDM5MDYtMTAgMC01LjUxOTUzMSA0LjQ3MjY1Ni0xMCA5Ljk5NjA5NC0xMGguMDA3ODEyYzUuNTIzNDM4IDAgMTAgNC40ODA0NjkgMTAgMTAgMCA1LjUyMzQzOC00LjQ3NjU2MiAxMC0xMCAxMHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjU2IDM2MmMtNTguNDQ5MjE5IDAtMTA2LTQ3LjU1MDc4MS0xMDYtMTA2czQ3LjU1MDc4MS0xMDYgMTA2LTEwNiAxMDYgNDcuNTUwNzgxIDEwNiAxMDYtNDcuNTUwNzgxIDEwNi0xMDYgMTA2em0wLTE5MmMtNDcuNDIxODc1IDAtODYgMzguNTc4MTI1LTg2IDg2czM4LjU3ODEyNSA4NiA4NiA4NiA4Ni0zOC41NzgxMjUgODYtODYtMzguNTc4MTI1LTg2LTg2LTg2em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYgMTM5Ljc4OTA2MmMtNS41MjM0MzggMC0xMC00LjQ3NjU2Mi0xMC0xMHYtNDBjMC01LjUyMzQzNyA0LjQ3NjU2Mi0xMCAxMC0xMHMxMCA0LjQ3NjU2MyAxMCAxMHY0MGMwIDUuNTIzNDM4LTQuNDc2NTYyIDEwLTEwIDEwem0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zNDQuNjEzMjgxIDE3Ni40OTYwOTRjLTIuNTU4NTkzIDAtNS4xMTcxODctLjk3NjU2My03LjA3MDMxMi0yLjkyOTY4OC0zLjkwMjM0NC0zLjkwNjI1LTMuOTAyMzQ0LTEwLjIzODI4MSAwLTE0LjE0NDUzMWwyOC4yODUxNTYtMjguMjgxMjVjMy45MDYyNS0zLjkwNjI1IDEwLjIzODI4MS0zLjkwNjI1IDE0LjE0NDUzMSAwIDMuOTAyMzQ0IDMuOTAyMzQ0IDMuOTAyMzQ0IDEwLjIzNDM3NSAwIDE0LjE0MDYyNWwtMjguMjg1MTU2IDI4LjI4NTE1NmMtMS45NTMxMjUgMS45NTMxMjUtNC41MTE3MTkgMi45Mjk2ODgtNy4wNzQyMTkgMi45Mjk2ODh6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQyMC41MTE3MTkgMjY2aC00MGMtNS41MjM0MzggMC0xMC00LjQ3NjU2Mi0xMC0xMHM0LjQ3NjU2Mi0xMCAxMC0xMGg0MGM1LjUyMzQzNyAwIDEwIDQuNDc2NTYyIDEwIDEwcy00LjQ3NjU2MyAxMC0xMCAxMHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTM4LjI2OTUzMSAzODIuNjI4OTA2Yy0yLjU1ODU5MyAwLTUuMTE3MTg3LS45NzY1NjItNy4wNzAzMTItMi45Mjk2ODctMy45MDYyNS0zLjkwMjM0NC0zLjkwNjI1LTEwLjIzNDM3NSAwLTE0LjE0MDYyNWwyOC4yODUxNTYtMjguMjg1MTU2YzMuOTAyMzQ0LTMuOTA2MjUgMTAuMjM0Mzc1LTMuOTA2MjUgMTQuMTQwNjI1IDBzMy45MDYyNSAxMC4yMzgyODEgMCAxNC4xNDA2MjRsLTI4LjI4NTE1NiAyOC4yODUxNTdjLTEuOTQ5MjE5IDEuOTUzMTI1LTQuNTExNzE5IDIuOTI5Njg3LTcuMDcwMzEzIDIuOTI5Njg3em0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMjkuODQ3NjU2IDI2NS43MzA0NjloLTQwYy01LjUyMzQzNyAwLTEwLTQuNDc2NTYzLTEwLTEwIDAtNS41MjM0MzggNC40NzY1NjMtMTAgMTAtMTBoNDBjNS41MjM0MzggMCAxMCA0LjQ3NjU2MiAxMCAxMCAwIDUuNTIzNDM3LTQuNDc2NTYyIDEwLTEwIDEwem0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNjcuNzU3ODEyIDE3Ny4wNTg1OTRjLTIuNTYyNSAwLTUuMTIxMDkzLS45ODA0NjktNy4wNzQyMTgtMi45Mjk2ODhsLTI4LjI4NTE1Ni0yOC4yODUxNTZjLTMuOTAyMzQ0LTMuOTA2MjUtMy45MDIzNDQtMTAuMjM4MjgxIDAtMTQuMTQ0NTMxIDMuOTA2MjUtMy45MDIzNDQgMTAuMjM4MjgxLTMuOTAyMzQ0IDE0LjE0NDUzMSAwbDI4LjI4NTE1NiAyOC4yODUxNTZjMy45MDIzNDQgMy45MDYyNSAzLjkwMjM0NCAxMC4yMzgyODEgMCAxNC4xNDQ1MzEtMS45NTMxMjUgMS45NDkyMTktNC41MTE3MTkgMi45Mjk2ODgtNy4wNzAzMTMgMi45Mjk2ODh6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTM3Mi4wODk4NDQgMzgyLjg5ODQzOGMtMi41NTg1OTQgMC01LjExNzE4OC0uOTc2NTYzLTcuMDcwMzEzLTIuOTI5Njg4bC0yOC4yODUxNTYtMjguMjgxMjVjLTMuOTA2MjUtMy45MDYyNS0zLjkwNjI1LTEwLjIzODI4MSAwLTE0LjE0NDUzMSAzLjkwNjI1LTMuOTAyMzQ0IDEwLjIzODI4MS0zLjkwMjM0NCAxNC4xNDQ1MzEgMGwyOC4yODEyNSAyOC4yODUxNTZjMy45MDYyNSAzLjkwMjM0NCAzLjkwNjI1IDEwLjIzNDM3NSAwIDE0LjE0MDYyNS0xLjk0OTIxOCAxLjk1MzEyNS00LjUxMTcxOCAyLjkyOTY4OC03LjA3MDMxMiAyLjkyOTY4OHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMjAwLjAxOTUzMSAyNjZjLTUuNTIzNDM3IDAtMTAuMDAzOTA2LTQuNDc2NTYyLTEwLjAwMzkwNi0xMHM0LjQ3MjY1Ni0xMCA5Ljk5NjA5NC0xMGguMDA3ODEyYzUuNTIzNDM4IDAgMTAgNC40NzY1NjIgMTAgMTBzLTQuNDc2NTYyIDEwLTEwIDEwem0wIDAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
      </div>
    </div>
  )
}

export default DisplayFakeControlsOne 