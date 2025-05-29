"use client";

export default function CodeEditorPattern() {
	return (
		<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
			<pre className="text-xs md:text-sm text-white/10 font-mono leading-relaxed whitespace-pre-wrap">
				{`class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('My App')),
      body: Center(child: Text('Hello Flutter')),
    );
  }
}`}
			</pre>
		</div>
	);
}
