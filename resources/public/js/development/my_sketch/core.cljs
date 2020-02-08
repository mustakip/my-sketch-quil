(ns my-sketch.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def colors (atom (cycle ["black" "white"])))


(defn random-color []
  (do
    (reset! colors (rest @colors))
    (first @colors))
  )

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :hsb)
  [
   {:radius 50 :color (random-color)}
   {:radius 5 :color (random-color)}]
  )

(defn update-state [state]
  (do
    (cond-> (mapv #(assoc % :radius (+ 5 (:radius %))) state)
            (= (:radius (last state)) 50) (conj {:radius 5 :color (random-color)})
            (= (:radius (first state)) 1000) (rest)
            )
    ))

(defn draw-state [state]
  (q/background 240)
  (q/with-translation [(/ (q/width) 2)
                       (/ (q/height) 2)]
                      (doseq [circle state]
                        (q/fill (:color circle))
                        (q/ellipse 0 0 (:radius circle) (:radius circle))
                        ))
  )

(defn ^:export run-sketch []
  (q/defsketch my-sketch
               :host "my-sketch"
               :size [700 700]
               :setup setup
               :update update-state
               :draw draw-state
               :middleware [m/fun-mode]
               ))

; uncomment this line to reset the sketch:
; (run-sketch)
